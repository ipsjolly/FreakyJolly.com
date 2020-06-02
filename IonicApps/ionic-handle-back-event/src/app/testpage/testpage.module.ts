import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestpagePageRoutingModule } from './testpage-routing.module';

import { TestpagePage } from './testpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestpagePageRoutingModule
  ],
  declarations: [TestpagePage]
})
export class TestpagePageModule {}
