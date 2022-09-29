import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  RouterStateSnapshot,
  UrlTree,
  Router,
  Route,
  UrlSegment,
} from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

import { SessionService } from '@app/services/session.service';

@Injectable({
  providedIn: 'root',
})
export class SessionGuard implements CanActivate, CanLoad {
  constructor(private session: SessionService, private router: Router) {}

  validateAuth() {
    return this.session.session$.pipe(
      switchMap((data) => {
        if (!data) return of(this.router.parseUrl('/auth/signin'));
        return of(true);
      })
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.validateAuth();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.validateAuth();
  }
}
