import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { seriesApi, userApi } from '@app/store/services';
import { Serie } from '@app/models/serie.model';
import { SessionService } from '@app/services/session.service';

const { useGetDetailsQuery } = seriesApi;
const {
  useAddInQueuedMutation,
  useRemoveInQueuedMutation,
  useLazyGetContainsInQueuedQuery,
} = userApi;

@Component({
  selector: 'serie-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) {}

  serieId = this.route.snapshot.params['id'];
  queryDetails$ = useGetDetailsQuery(this.serieId);
  queryInQueued = useLazyGetContainsInQueuedQuery();
  queryAdd = useAddInQueuedMutation();
  queryRemove = useRemoveInQueuedMutation();

  isLoading: boolean = true;
  isLoadingBookmark: boolean = false;
  isError: boolean | undefined = undefined;
  data!: Serie;
  inQueued: boolean = false;

  isAuth: boolean = false;

  onBtnBookmark() {
    if (!this.isAuth) return;

    if (this.inQueued) this.queryRemove.dispatch(this.serieId);
    else this.queryAdd.dispatch(this.serieId);
  }

  ngOnInit(): void {
    this.sessionService.session$.subscribe((data) => {
      if (data)
        this.queryInQueued.fetch(this.serieId, { preferCacheValue: true });
      this.isAuth = Boolean(data);
    });

    this.queryDetails$.subscribe(({ data, isLoading, isError }) => {
      this.isLoading = isLoading;
      this.isError = isError;

      if (data) this.data = data;
    });

    this.queryInQueued.state$.subscribe(({ data }) => {
      if (data) this.inQueued = data.items[0];
    });

    this.queryAdd.state$.subscribe(({ isLoading, isSuccess }) => {
      this.isLoadingBookmark = isLoading;
      if (isSuccess) this.inQueued = true;
    });

    this.queryRemove.state$.subscribe(({ isLoading, isSuccess }) => {
      this.isLoadingBookmark = isLoading;
      if (isSuccess) this.inQueued = false;
    });
  }
}
