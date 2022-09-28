import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';

import { filtersApi } from '@app/store/services';
import { Filter } from '@app/models/filter.model';

const { useGetSeasonsQuery, useGetGendersQuery, useGetFormatsQuery } =
  filtersApi;

interface FilterItem extends Filter {
  isAll?: boolean;
}

@Component({
  selector: 'filters-button',
  templateUrl: 'filters-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnFiltersComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  popperPlacement = NgxPopperjsPlacements.BOTTOMEND;
  popperTrigger = NgxPopperjsTriggers.click;

  genders: FilterItem[] = [];
  seasons: FilterItem[] = [];
  formats: FilterItem[] = [];
  isLoading: boolean = true;
  isError: boolean = false;
  params: Params = {};

  querySeasons$ = useGetSeasonsQuery();
  queryGenders$ = useGetGendersQuery();
  queryFormats$ = useGetFormatsQuery();

  isActivatedParam(param: string, value: string): boolean {
    const paramValue = this.params[param];
    const isFilterAll = !paramValue && !value;

    if (isFilterAll) return true;
    return paramValue === value;
  }

  onChecked(ev: Event) {
    const { value } = ev.target as HTMLInputElement;
    const [paramName, paramValue] = value.split(':');

    if (paramValue) {
      this.addQueryParam(paramName, paramValue);
    } else {
      this.removeQueryParam(paramName);
    }
  }

  addQueryParam(param: string, value: string) {
    this.router.navigate(['/catalog'], {
      queryParams: { ...this.params, [param]: value },
    });
  }

  removeQueryParam(param: string) {
    const clonedParams = { ...this.params };
    delete clonedParams[param];

    this.router.navigate(['/catalog'], {
      queryParams: clonedParams,
    });
  }

  createRadioValue(param: string, value: string) {
    return `${param}:${value}`;
  }

  ngOnInit(): void {
    const filterAll: FilterItem = {
      _id: 'all',
      created_at: '',
      name: '',
      isAll: true,
    };

    combineLatest({
      genders: this.queryGenders$,
      seasons: this.querySeasons$,
      formats: this.queryFormats$,
    }).subscribe(({ genders, seasons, formats }) => {
      const isError = genders.isError || seasons.isError || formats.isError;
      const isLoading =
        genders.isLoading || seasons.isLoading || formats.isLoading;
      this.isLoading = isLoading;
      this.isError = isError;

      if (genders.data) this.genders = [filterAll, ...genders.data.items];
      if (seasons.data) this.seasons = [filterAll, ...seasons.data.items];
      if (formats.data) this.formats = [filterAll, ...formats.data.items];
    });

    this.route.queryParams.subscribe((params) => {
      this.params = params;
    });
  }
}
