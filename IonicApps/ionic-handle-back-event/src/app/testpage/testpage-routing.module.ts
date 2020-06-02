import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestpagePage } from './testpage.page';

const routes: Routes = [
  {
    path: '',
    component: TestpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestpagePageRoutingModule {}
