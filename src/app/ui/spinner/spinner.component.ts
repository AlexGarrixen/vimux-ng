import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="
          inline-block
          w-12
          h-12
          border-[6px]
          border-t-brand
          border-l-gray-6
          border-r-gray-6
          border-b-gray-6
          rounded-full
          animate-spin
        "
    ></span>
  `,
})
export class SpinnerComponent {
  constructor() {}
}
