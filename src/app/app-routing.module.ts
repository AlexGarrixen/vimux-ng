import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SessionGuard } from '@app/guards/session.guard';

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
    path: 'auth',
    loadChildren: () =>
      import('@app/pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('@app/pages/user/user.module').then((m) => m.UserModule),
    canActivate: [SessionGuard],
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
