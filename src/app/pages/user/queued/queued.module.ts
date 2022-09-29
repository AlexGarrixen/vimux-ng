import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueuedRoutingModule } from './queued-routing.module';
import { QueuedComponent } from './queued.component';
import { LayoutModule } from '@app/components/layout/layout.module';

@NgModule({
  declarations: [QueuedComponent],
  imports: [CommonModule, QueuedRoutingModule, LayoutModule],
})
export class QueuedModule {}
