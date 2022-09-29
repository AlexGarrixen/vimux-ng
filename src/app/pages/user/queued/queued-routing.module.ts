import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QueuedComponent } from './queued.component';

const routes: Routes = [
  {
    path: '',
    component: QueuedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueuedRoutingModule {}
