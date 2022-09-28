import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPopperjsModule } from 'ngx-popperjs';

import { BtnFiltersComponent } from './filter-btn.component';
import { RadioModule } from '@app/ui';

@NgModule({
  declarations: [BtnFiltersComponent],
  imports: [CommonModule, NgxPopperjsModule, RadioModule],
  exports: [BtnFiltersComponent],
})
export class FiltersBtnModule {}
