import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

import { LatestEpisodesComponent } from './latest-episodes.component';
import { SerieCardModule } from '@app/components/serie-card/serie-card.module';

@NgModule({
  declarations: [LatestEpisodesComponent],
  imports: [CommonModule, RouterModule, SwiperModule, SerieCardModule],
  exports: [LatestEpisodesComponent],
})
export class LatestEpisodesModule {}
