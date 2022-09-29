import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRtkQueryModule } from 'ngrx-rtk-query';

import { environment } from '../../environments/environment';
import {
  seriesApi,
  directoryApi,
  episodesApi,
  filtersApi,
  authApi,
} from './services';

export type RootState = {
  [seriesApi.reducerPath]: ReturnType<typeof seriesApi.reducer>;
  [episodesApi.reducerPath]: ReturnType<typeof episodesApi.reducer>;
  [directoryApi.reducerPath]: ReturnType<typeof directoryApi.reducer>;
  [filtersApi.reducerPath]: ReturnType<typeof filtersApi.reducer>;
  [authApi.reducerPath]: ReturnType<typeof authApi.reducer>;
};

export const reducers: ActionReducerMap<RootState> = {
  [seriesApi.reducerPath]: seriesApi.reducer,
  [directoryApi.reducerPath]: directoryApi.reducer,
  [episodesApi.reducerPath]: episodesApi.reducer,
  [filtersApi.reducerPath]: filtersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers: [
        seriesApi.metareducer,
        episodesApi.metareducer,
        directoryApi.metareducer,
        filtersApi.metareducer,
        authApi.metareducer,
      ],
    }),
    StoreRtkQueryModule.forRoot({ setupListeners: true }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class CoreStoreModule {}
