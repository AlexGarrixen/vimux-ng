import { createApi } from 'ngrx-rtk-query';

import { baseQuery } from './baseQuery';
import { Session } from '@app/models/auth.model'

interface LoginArgs {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,

  endpoints: (build) => ({
    login: build.mutation<Session, LoginArgs>({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        headers: {
          Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        },
      }),
    }),
  }),
});
