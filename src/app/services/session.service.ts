import { Injectable } from '@angular/core';

import { Session } from '@app/models/auth.model';
import { BehaviorSubject } from 'rxjs';

export const TOKEN_KEY = 'token';
export const USER_KEY = 'user-session';

export type AuthSession = Omit<Session, 'access_token'> | null;

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  private session = new BehaviorSubject<AuthSession>(this.getSession());
  session$ = this.session.asObservable();

  save({ access_token, ...userData }: Session) {
    localStorage.setItem(TOKEN_KEY, access_token);
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
    this.session.next(userData);
  }

  remove() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.session.next(null);
  }

  private getSession(): AuthSession {
    const value = localStorage.getItem(USER_KEY);
    return value ? JSON.parse(value) : null;
  }
}
