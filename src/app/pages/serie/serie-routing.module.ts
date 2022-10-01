import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SerieComponent } from './serie.component';

const routes: Routes = [
  {
    path: '',
    component: SerieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerieRoutingModule {}
