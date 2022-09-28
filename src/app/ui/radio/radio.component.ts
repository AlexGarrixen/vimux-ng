import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'inline-flex',
  },
})
export class RadioComponent {
  constructor() {}

  @Input() checked!: boolean;
  @Input() value!: string;
  @Output() onChecked = new EventEmitter<Event>();

  onChange(ev: Event) {
    this.onChecked.emit(ev);
  }
}
