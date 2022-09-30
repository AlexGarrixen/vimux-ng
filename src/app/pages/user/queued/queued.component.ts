import { Component, OnInit } from '@angular/core';

import { userApi } from '@app/store/services';
import { QueuedSerie } from '@app/models/serie.model';

const { useGetListQueuedQuery } = userApi;

@Component({
  selector: 'app-queued',
  templateUrl: './queued.component.html',
})
export class QueuedComponent implements OnInit {
  constructor() {}

  query$ = useGetListQueuedQuery();
  isLoading: boolean = true;
  isError: boolean | undefined = undefined;
  data: QueuedSerie[] = [];

  ngOnInit(): void {
    this.query$.subscribe(({ data, isLoading, isError }) => {
      if (data) this.data = data.items;
      this.isLoading = isLoading;
      this.isError = isError;
    });
  }
}
