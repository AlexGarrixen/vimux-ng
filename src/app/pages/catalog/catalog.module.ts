import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CatalogRoutingModule } from './catalog-routing.module';
import { SpinnerModule } from '@app/ui';
import { LayoutModule } from '@app/components/layout/layout.module';
import { FiltersBtnModule } from './components/filters-button/filters-btn.module';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { CatalogComponent } from './catalog.component';
import { CatalogItemModule } from './components/catalog-item/catalog-item.module';

import { IntersectionObserverDirective } from '@app/directives/intersection-observer.directive';

@NgModule({
  declarations: [
    CatalogComponent,
    IntersectionObserverDirective,
    SkeletonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CatalogRoutingModule,
    LayoutModule,
    FiltersBtnModule,
    SpinnerModule,
    CatalogItemModule,
  ],
  exports: [],
})
export class CatalogModule {}
