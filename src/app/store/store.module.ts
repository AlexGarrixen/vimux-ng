import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRtkQueryModule } from 'ngrx-rtk-query';

import { environment } from '../../environments/environment';
import { seriesApi, episodesApi } from './services';

export type RootState = {
  [seriesApi.reducerPath]: ReturnType<typeof seriesApi.reducer>;
  [episodesApi.reducerPath]: ReturnType<typeof episodesApi.reducer>;
};

export const reducers: ActionReducerMap<RootState> = {
  [seriesApi.reducerPath]: seriesApi.reducer,
  [episodesApi.reducerPath]: episodesApi.reducer,
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers: [seriesApi.metareducer, episodesApi.metareducer],
    }),
    StoreRtkQueryModule.forRoot({ setupListeners: true }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class CoreStoreModule {}
