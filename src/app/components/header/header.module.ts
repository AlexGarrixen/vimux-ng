import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SvgLogoModule } from '@app/components/svg';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, SvgLogoModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
