import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SvgLogoModule } from '@app/components/svg';
import { HeaderComponent } from './header.component';
import { AvatarDropdownModule } from './avatar-dropdown/avatar-dropdown.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, SvgLogoModule, AvatarDropdownModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
