import { Component, OnInit } from '@angular/core';

interface Link {
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor() {}

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

  ngOnInit(): void {}
}
