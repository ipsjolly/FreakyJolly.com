import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyModalPageRoutingModule } from './my-modal-routing.module';

import { MyModalPage } from './my-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyModalPageRoutingModule
  ],
  declarations: [MyModalPage]
})
export class MyModalPageModule {}
