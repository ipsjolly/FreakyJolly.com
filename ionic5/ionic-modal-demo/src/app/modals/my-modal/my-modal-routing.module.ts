import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyModalPage } from './my-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MyModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyModalPageRoutingModule {}
