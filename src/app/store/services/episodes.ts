import { createApi } from 'ngrx-rtk-query';

import { Episode } from '@app/models/episode.model';
import { baseQuery } from './baseQuery';

export interface RecentlyEpisodesResponse {
  items: Episode[];
  last_page: number;
  next_page: number;
  prev_page: null;
}

export const episodesApi = createApi({
  reducerPath: 'episodesApi',
  baseQuery,
  refetchOnFocus: false,
  tagTypes: ['Recently_Eps'],

  endpoints: (build) => ({
    getRecently: build.query<RecentlyEpisodesResponse, void>({
      query: () => ({
        url: '/episodes',
        params: {
          release: 'last_premiers',
          sort_release: 'desc',
          limit_items: 10,
        },
      }),
      providesTags: ['Recently_Eps'],
    }),
  }),
});
