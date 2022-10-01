import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SerieRoutingModule } from './serie-routing.module';
import { SerieComponent } from './serie.component';
import { LayoutModule } from '@app/components/layout/layout.module';
import { BannerModule } from './components/banner/banner.module';
import { EpisodesListModule } from './components/episodes-list/episodes-list.module';

@NgModule({
  declarations: [SerieComponent],
  imports: [
    CommonModule,
    SerieRoutingModule,
    LayoutModule,
    BannerModule,
    EpisodesListModule,
  ],
  exports: [SerieComponent],
})
export class SerieModule {}
