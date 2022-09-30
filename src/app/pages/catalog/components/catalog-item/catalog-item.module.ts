import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogItemComponent } from './catalog-item.component';
import { SerieCardModule } from '@app/components/serie-card/serie-card.module';

@NgModule({
  declarations: [CatalogItemComponent],
  imports: [CommonModule, SerieCardModule],
  exports: [CatalogItemComponent],
})
export class CatalogItemModule {}
