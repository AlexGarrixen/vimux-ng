import { createApi } from 'ngrx-rtk-query';
import { Params } from '@angular/router';

import { baseQuery } from './baseQuery';
import { Serie } from '@app/models/serie.model';
import { Episode } from '@app/models/episode.model';

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

export interface EpisodesResponse {
  items: (Omit<Episode, 'serie_id'> & { serie_id: string })[];
}

export const seriesApi = createApi({
  reducerPath: 'seriesApi',
  baseQuery,
  refetchOnFocus: false,
  tagTypes: ['Recently', 'SerieEps', 'SerieDetails'],

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
    getDetails: build.query<Serie, string>({
      query: (id) => ({
        url: `/series/${id}`,
      }),
      providesTags: ['SerieDetails'],
    }),
    getEpisodes: build.query<EpisodesResponse, string>({
      query: (id) => ({
        url: `/series/${id}/episodes`,
      }),
      providesTags: ['SerieEps'],
    }),
  }),
});

export const directoryApi = createApi({
  reducerPath: 'directoryApi',
  baseQuery,
  refetchOnFocus: false,
  tagTypes: ['Catalog', 'CatalogContains'],

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
      providesTags: ['CatalogContains'],
    }),
  }),
});
