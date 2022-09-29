import { Component, OnInit } from '@angular/core';

import { SessionService, AuthSession } from '@app/services/session.service';

interface Link {
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private sessionService: SessionService) {}

  session!: AuthSession;

  links: Link[] = [
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Catalogo',
      href: '/catalog',
    },
  ];

  ngOnInit(): void {
    this.sessionService.session$.subscribe((data) => {
      this.session = data;
    });
  }
}
