import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'serie-card',
  templateUrl: './serie-card.component.html',
})
export class SerieCardComponent {
  constructor() {}

  @Input() img!: string;
  @Input() title!: string;
  @Input() body!: string;
  @Input() aspectRatio: 'square' | 'rectangle' | 'thumbnail' = 'square';
  @Input() showBookmark: boolean = false;
  @Input() activeBookmark: boolean = false;
  @Input() loadingBookmark: boolean = false;
  @Output() onClickBookmark = new EventEmitter<Event>();

  onBookmark(ev: Event) {
    ev.stopPropagation();
    ev.preventDefault();
    this.onClickBookmark.emit(ev);
  }
}
