import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { SpinnerModule } from '@app/ui';
import { LayoutModule } from '@app/components/layout/layout.module';
import { SerieCardModule } from '@app/components/serie-card/serie-card.module';
import { FiltersBtnModule } from './components/filters-button/filters-btn.module';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { CatalogComponent } from './catalog.component';

import { IntersectionObserverDirective } from '@app/directives/intersection-observer.directive';

@NgModule({
  declarations: [
    CatalogComponent,
    IntersectionObserverDirective,
    SkeletonComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    LayoutModule,
    SerieCardModule,
    FiltersBtnModule,
    SpinnerModule,
  ],
  exports: [],
})
export class CatalogModule {}
