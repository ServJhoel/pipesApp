import { NgModule } from '@angular/core';
// import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { CardModule} from 'primeng/card'
import { FieldsetModule} from 'primeng/fieldset'
import {PanelModule} from 'primeng/panel'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [],
  providers: [],
  exports: [
    // MenuModule,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    CommonModule
  ],
})
export class PrimeNgModule {}
