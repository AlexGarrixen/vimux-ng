import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SerieCardModule } from '@app/components/serie-card/serie-card.module';
import { EpisodesListComponent } from './episodes-list.component';

@NgModule({
  declarations: [EpisodesListComponent],
  imports: [CommonModule, SerieCardModule],
  exports: [EpisodesListComponent],
})
export class EpisodesListModule {}
