import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { seriesApi, RecentlyResponse } from '@app/store/services';
import { Serie } from '@app/models/serie.model';

const { useGetRecentlyQuery } = seriesApi;

@Component({
  selector: 'recently-uploaded',
  templateUrl: './recently-uploaded.component.html',
  styleUrls: ['./recently-uploaded.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentlyUploadedComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}

  query$ = useGetRecentlyQuery(undefined);
  data: RecentlyResponse | undefined = undefined;
  isLoading: boolean = true;
  isError: boolean | undefined = undefined;

  firstRecently: Serie | undefined = undefined;

  ngOnInit(): void {
    this.query$.subscribe(({ data, isLoading, isError }) => {
      this.isLoading = isLoading;
      this.isError = isError;
      this.data = data;
      this.firstRecently = data?.items[0];
      this.cdr.markForCheck();
    });
  }
}
