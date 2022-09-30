import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueuedItemComponent } from './queued-item.component';
import { SerieCardModule } from '@app/components/serie-card/serie-card.module';

@NgModule({
  declarations: [QueuedItemComponent],
  imports: [CommonModule, SerieCardModule],
  exports: [QueuedItemComponent],
})
export class QueuedItemModule {}
