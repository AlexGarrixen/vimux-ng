import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { directoryApi } from '@app/store/services';
import { Serie } from '@app/models/serie.model';
import { dispatch } from 'ngrx-rtk-query';

const { useLazyGetDirectoryQuery } = directoryApi;

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  query = useLazyGetDirectoryQuery();
  data: Serie[] = [];
  isLoading: boolean = true;
  isError: boolean | undefined = undefined;
  isFirstLoad: boolean = false;
  enabledObserver: boolean = false;

  page_cursor: number = 1;
  hasNextPage: boolean = true;
  queryParams: Params = {};

  onInstersect(inView: boolean) {
    if (inView && this.enabledObserver) this.fetchNextPage();
  }

  resetCache() {
    dispatch(directoryApi.util.resetApiState());
  }

  fetchNextPage() {
    if (!this.hasNextPage) return;
    this.resetCache();
    this.page_cursor += 1;
    this.query.fetch({ page: this.page_cursor, ...this.queryParams });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.resetCache();
      this.queryParams = params;
      this.data = [];
      this.isFirstLoad = false;
      this.page_cursor = 1;
      this.query.fetch({ ...params, page: this.page_cursor });
    });

    this.query.state$.subscribe(({ data, isLoading, isError }) => {
      this.isLoading = isLoading;
      this.isError = isError;

      if (data) {
        this.data = [...this.data, ...data.items];
        this.hasNextPage = data.next_page !== null;
        this.enabledObserver = true;
        this.isFirstLoad = true;
      }
    });
  }
}
