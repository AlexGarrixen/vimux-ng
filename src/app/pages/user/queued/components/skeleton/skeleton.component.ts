import { Component } from '@angular/core';

@Component({
  selector: 'queued-skeleton',
  template: `
    <ul class="grid grid-cols-4 gap-4">
      <ng-container *ngFor="let item of items">
        <li>
          <article class="bg-gray-3 rounded-md overflow-hidden">
            <div class="aspect-video bg-gray-5"></div>
            <div class="p-4 h-[100px]">
              <span class="h-[15px] bg-gray-5 block"></span>
              <span class="h-[15px] bg-gray-5 block w-[50%] mt-3"></span>
            </div>
          </article>
        </li>
      </ng-container>
    </ul>
  `,
})
export class SkeletonComponent {
  items = Array.from({ length: 7 });
}
