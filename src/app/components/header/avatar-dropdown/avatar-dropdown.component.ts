import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPopperjsPlacements } from 'ngx-popperjs';

import { SessionService } from '@app/services/session.service';

@Component({
  selector: 'avatar-dropdown',
  templateUrl: './avatar-dropdown.component.html',
})
export class AvatarDropdownComponent implements OnInit {
  constructor(private sessionService: SessionService, private router: Router) {}
  popperPlacement = NgxPopperjsPlacements.TOPEND;

  @Input() label: string = '';

  logout() {
    this.sessionService.remove();
    this.router.navigate(['/auth/signin']);
  }

  ngOnInit(): void {}
}
