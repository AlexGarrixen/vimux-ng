import { createApi } from 'ngrx-rtk-query';

import { baseQuery } from './baseQuery';
import { QueuedSerie } from '@app/models/serie.model';

interface QueuedResponse {
  items: QueuedSerie[];
}

interface RemoveQueuedResponse {
  id_deleted: string;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  refetchOnFocus: false,
  tagTypes: ['Queued'],

  endpoints: (build) => ({
    getListQueued: build.query<QueuedResponse, void>({
      query: () => ({ url: '/me/queued', sendToken: true }),
      providesTags: ['Queued'],
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
      invalidatesTags: ['Queued'],
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
      invalidatesTags: ['Queued'],
    }),
  }),
});
