import { Component, Input } from '@angular/core';

@Component({
  selector: 'serie-card',
  templateUrl: './serie-card.component.html',
})
export class SerieCardComponent {
  constructor() {}

  @Input() img!: string;
  @Input() title!: string;
  @Input() body!: string;
  @Input() aspectRatio: 'square' | 'rectangle' = 'square';
}
