import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import { environment } from '@src/environments/environment';

export const baseQuery = fetchBaseQuery({
  baseUrl: environment.apiBaseUrl,
});
