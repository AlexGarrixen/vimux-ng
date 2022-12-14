import { createApi } from 'ngrx-rtk-query';

import { baseQuery } from './baseQuery';
import { Filter } from '@app/models/filter.model';

export interface FilterResponse {
  items: Filter[];
}

export const filtersApi = createApi({
  reducerPath: 'filtersApi',
  baseQuery,
  refetchOnFocus: false,
  tagTypes: ['Seasons', 'Genders', 'Formats'],

  endpoints: (build) => ({
    getSeasons: build.query<FilterResponse, void>({
      query: () => ({ url: '/seasons' }),
      providesTags: ['Seasons'],
    }),
    getGenders: build.query<FilterResponse, void>({
      query: () => ({ url: '/genders' }),
      providesTags: ['Genders'],
    }),
    getFormats: build.query<FilterResponse, void>({
      query: () => ({ url: '/types' }),
      providesTags: ['Formats'],
    }),
  }),
});
