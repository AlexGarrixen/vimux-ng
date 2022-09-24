import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <main>
      <ng-content></ng-content>
    </main>
  `,
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
