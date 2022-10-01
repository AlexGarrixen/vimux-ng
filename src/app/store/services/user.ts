import { createApi } from 'ngrx-rtk-query';

import { baseQuery } from './baseQuery';
import { QueuedSerie } from '@app/models/serie.model';

interface QueuedResponse {
  items: QueuedSerie[];
}

interface RemoveQueuedResponse {
  id_deleted: string;
}

interface ContainsQueuedResponse {
  items: boolean[];
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  refetchOnFocus: false,
  tagTypes: ['QueuedList', 'UserContainsSerie'],

  endpoints: (build) => ({
    getListQueued: build.query<QueuedResponse, void>({
      query: () => ({ url: '/me/queued', sendToken: true }),
      providesTags: ['QueuedList'],
    }),
    addInQueued: build.mutation<QueuedSerie, string>({
      query: (serie_id: string) => ({
        url: '/me/queued',
        method: 'Post',
        sendToken: true,
        data: {
          serie_id,
        },
      }),
      invalidatesTags: ['QueuedList', 'UserContainsSerie'],
    }),
    removeInQueued: build.mutation<RemoveQueuedResponse, string>({
      query: (serie_id: string) => ({
        url: '/me/queued',
        method: 'Delete',
        sendToken: true,
        data: {
          serie_propietary: serie_id,
        },
      }),
      invalidatesTags: ['QueuedList', 'UserContainsSerie'],
    }),
    getContainsInQueued: build.query<ContainsQueuedResponse, string>({
      query: (serieId) => ({
        url: '/me/queued/contains',
        params: { ids: serieId },
        sendToken: true,
      }),
      providesTags: ['UserContainsSerie'],
    }),
  }),
});
