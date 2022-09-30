import { Component, Input, OnInit } from '@angular/core';

import { userApi } from '@app/store/services';

const { useRemoveSerieQueuedMutation } = userApi;

@Component({
  selector: 'queued-item',
  templateUrl: './queued-item.component.html',
})
export class QueuedItemComponent implements OnInit {
  constructor() {}

  @Input() serieId!: string;
  @Input() serieName!: string;
  @Input() episodeName!: string;
  @Input() img!: string;
  @Input() order!: number;

  isDeleting: boolean = false;

  query = useRemoveSerieQueuedMutation();

  onTrash() {
    this.query.dispatch(this.serieId);
  }

  ngOnInit(): void {
    this.query.state$.subscribe(({ isLoading }) => {
      this.isDeleting = isLoading;
    });
  }
}
