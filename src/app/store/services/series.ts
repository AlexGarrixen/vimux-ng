import { createApi } from 'ngrx-rtk-query';
import { Params } from '@angular/router';

import { baseQuery } from './baseQuery';
import { Serie } from '@app/models/serie.model';

export interface SeriesResponse {
  items: Serie[];
  last_page: number;
  next_page: null;
  prev_page: null;
  count: number;
}

interface ContainsQueuedResponse {
  items: boolean[];
}

export const seriesApi = createApi({
  reducerPath: 'seriesApi',
  baseQuery,
  refetchOnFocus: false,
  tagTypes: ['Recently', 'Catalog'],

  endpoints: (build) => ({
    getRecently: build.query<SeriesResponse, void>({
      query: () => ({
        url: '/series',
        params: {
          release: 'last_premiers',
          type: 'Tv',
          sort_release: 'desc',
          limit_items: 10,
        },
      }),
      providesTags: ['Recently'],
    }),
  }),
});

export const directoryApi = createApi({
  reducerPath: 'directoryApi',
  baseQuery,
  refetchOnFocus: false,
  tagTypes: ['Catalog', 'UserContains'],

  endpoints: (build) => ({
    getDirectory: build.query<SeriesResponse, { page: number; type?: string }>({
      query: ({ page, type, gender, season }: Params) => ({
        url: '/series',
        params: {
          limit_items: 8,
          page_index: page,
          gender,
          season,
          sort_release: 'desc',
          type,
        },
      }),
      providesTags: ['Catalog'],
    }),
    getContainsInQueued: build.query<ContainsQueuedResponse, string[]>({
      query: (ids) => ({
        url: '/me/queued/contains',
        params: { ids: ids.join(',') },
        sendToken: true,
      }),
    }),
  }),
});
