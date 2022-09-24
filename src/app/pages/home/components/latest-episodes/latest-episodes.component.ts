import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

import { episodesApi, RecentlyEpisodesResponse } from '@app/store/services';

const { useGetRecentlyQuery } = episodesApi;

@Component({
  selector: 'latest-episodes',
  templateUrl: './latest-episodes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestEpisodesComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}

  query$ = useGetRecentlyQuery();
  data: RecentlyEpisodesResponse | undefined = undefined;
  isLoading: boolean = true;
  isError: boolean | undefined = undefined;

  skeletonList = Array.from({ length: 4 });

  ngOnInit(): void {
    this.query$.subscribe(({ data, isLoading, isError }) => {
      this.data = data;
      this.isLoading = isLoading;
      this.isError = isError;
      this.cdr.markForCheck();
    });
  }
}
