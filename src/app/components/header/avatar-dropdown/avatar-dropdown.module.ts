import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPopperjsModule } from 'ngx-popperjs';

import { AvatarDropdownComponent } from './avatar-dropdown.component';
import { AvatarModule } from '@app/ui';

@NgModule({
  declarations: [AvatarDropdownComponent],
  imports: [CommonModule, NgxPopperjsModule, RouterModule, AvatarModule],
  exports: [AvatarDropdownComponent],
})
export class AvatarDropdownModule {}
