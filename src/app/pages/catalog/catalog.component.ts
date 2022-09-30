import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { dispatch } from 'ngrx-rtk-query';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { directoryApi } from '@app/store/services';
import { Serie } from '@app/models/serie.model';
import { SessionService, AuthSession } from '@app/services/session.service';

const { useLazyGetDirectoryQuery, useLazyGetContainsInQueuedQuery } =
  directoryApi;

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) {}

  query = useLazyGetDirectoryQuery();
  queryContains = useLazyGetContainsInQueuedQuery();
  querySubscribtion!: Subscription;
  queryContainsSubscribtion!: Subscription;

  data: Serie[] = [];
  containsInQueued: boolean[] = [];
  isLoading: boolean = true;
  isError: boolean | undefined = undefined;
  isFirstLoad: boolean = false;
  enabledObserver: boolean = false;

  page_cursor: number = 1;
  hasNextPage: boolean = true;
  queryParams: Params = {};

  session: AuthSession = null;

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

  fetchContainsInQueued(items: Serie[]) {
    const shouldFetchContains = this.session && items;
    if (shouldFetchContains) {
      const ids = items.map(({ _id }) => _id);
      this.queryContains.fetch(ids);
    }
  }

  onAddedInQueue({ index }: { id: string; index: number }) {
    this.containsInQueued[index] = true;
  }

  onRemovedInQueue({ index }: { id: string; index: number }) {
    this.containsInQueued[index] = false;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.resetCache();
      this.queryParams = params;
      this.data = [];
      this.containsInQueued = [];
      this.isFirstLoad = false;
      this.page_cursor = 1;
      this.query.fetch({ ...params, page: this.page_cursor });
    });

    this.querySubscribtion = this.query.state$
      .pipe(tap(({ data }) => data && this.fetchContainsInQueued(data.items)))
      .subscribe(({ data, isLoading, isError }) => {
        this.isLoading = isLoading;
        this.isError = isError;

        if (data) {
          this.data = [...this.data, ...data.items];
          this.hasNextPage = data.next_page !== null;
          this.enabledObserver = true;
          this.isFirstLoad = true;
        }
      });

    this.queryContainsSubscribtion = this.queryContains.state$.subscribe(
      ({ data }) => {
        if (data) {
          this.containsInQueued = [...this.containsInQueued, ...data.items];
        }
      }
    );

    this.sessionService.session$.subscribe((data) => {
      this.session = data;
    });
  }

  ngOnDestroy() {
    this.querySubscribtion?.unsubscribe();
    this.queryContainsSubscribtion?.unsubscribe();
  }
}
