import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('@app/pages/catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
