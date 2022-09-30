import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@app/components/layout/layout.module';
import { QueuedRoutingModule } from './queued-routing.module';
import { QueuedComponent } from './queued.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { QueuedItemModule } from './components/queued-item/queued-item.module';

@NgModule({
  declarations: [QueuedComponent, SkeletonComponent],
  imports: [CommonModule, QueuedRoutingModule, LayoutModule, QueuedItemModule],
})
export class QueuedModule {}
