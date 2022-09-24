import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

import { RecentlyUploadedComponent } from './recently-uploaded.component';
import { SerieCardModule } from '@app/components/serie-card/serie-card.module';

@NgModule({
  declarations: [RecentlyUploadedComponent],
  imports: [CommonModule, RouterModule, SwiperModule, SerieCardModule],
  exports: [RecentlyUploadedComponent],
})
export class RecentlyUploadedModule {}
