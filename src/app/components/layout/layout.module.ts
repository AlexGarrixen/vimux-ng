import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '@app/components/header/header.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, HeaderModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
