import { createApi } from 'ngrx-rtk-query';

import { baseQuery } from './baseQuery';
import { Serie } from '@app/models/serie.model';

export interface RecentlyResponse {
  items: Serie[];
  last_page: number;
  next_page: null;
  prev_page: null;
  count: number;
}

export const seriesApi = createApi({
  reducerPath: 'seriesApi',
  baseQuery,
  refetchOnFocus: false,
  tagTypes: ['Recently'],

  endpoints: (build) => ({
    getRecently: build.query<RecentlyResponse, void>({
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
