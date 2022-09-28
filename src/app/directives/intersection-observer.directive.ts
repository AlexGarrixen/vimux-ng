import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  Input,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[intersectionObserver]',
})
export class IntersectionObserverDirective implements AfterViewInit, OnDestroy {
  constructor(private refEl: ElementRef) {}

  @Input() onceTrigger: boolean = false;
  @Output() onIntersect = new EventEmitter<boolean>();
  observer!: IntersectionObserver;

  handleIntersectionObserver: IntersectionObserverCallback = (
    entries,
    observer
  ) => {
    entries.forEach((entry) => {
      this.onIntersect.emit(entry.isIntersecting);

      if (this.onceTrigger && entry.isIntersecting)
        observer.unobserve(entry.target);
    });
  };

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(this.handleIntersectionObserver);
    this.observer.observe(this.refEl.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
