import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { LayoutModule } from '@app/components/layout/layout.module';
import { HomeRoutingModule } from './home-routing.module';
import { RecentlyUploadedModule } from './components/recently-uploaded/recently-uploaded.module';
import { LatestEpisodesModule } from './components/latest-episodes/latest-episodes.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    RecentlyUploadedModule,
    LatestEpisodesModule,
  ],
})
export class HomeModule {}
