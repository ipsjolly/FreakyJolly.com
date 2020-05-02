import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablinksPageRoutingModule } from './tablinks-routing.module';

import { TablinksPage } from './tablinks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablinksPageRoutingModule
  ],
  declarations: [TablinksPage]
})
export class TablinksPageModule {}
