import { Component, Input } from '@angular/core';

@Component({
  selector: 'avatar',
  host: {
    class: 'inline-flex',
  },
  template: `
    <span
      class="
        inline-flex
        items-center
        justify-center
        w-10
        h-10
        rounded-full
        bg-gray-6
        font-bold
        cursor-pointer
      "
    >
      <ng-container *ngIf="!isError && src; else nameBlock">
        <img
          class="h-full w-full object-cover"
          [src]="src"
          (error)="onError()"
        />
      </ng-container>
      <ng-template #nameBlock>
        <div role="img">
          {{ extractName(name) }}
        </div>
      </ng-template>
    </span>
  `,
})
export class AvatarComponent {
  constructor() {}

  isError: boolean = false;

  @Input() name!: string;
  @Input() src!: string;

  onError() {
    this.isError = true;
  }

  extractName(value: string) {
    if (!value) return '';
    const words = value.split(' ').slice(0, 2);
    return words.map((word) => word.charAt(0)).join('');
  }
}
