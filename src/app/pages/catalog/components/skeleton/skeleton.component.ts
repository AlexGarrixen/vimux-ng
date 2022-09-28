import { Component } from '@angular/core';

@Component({
  selector: 'catalog-skeleton',
  template: `
    <ul class="grid grid-cols-5 gap-5">
      <ng-container *ngFor="let item of items">
        <li>
          <article class="aspect-[2/3] bg-gray-3 rounded-md"></article>
        </li>
      </ng-container>
    </ul>
  `,
})
export class SkeletonComponent {
  items = Array.from({ length: 7 });
}
