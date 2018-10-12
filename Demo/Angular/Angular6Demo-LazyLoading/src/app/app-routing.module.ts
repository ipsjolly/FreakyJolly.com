import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path:"view-one",
      loadChildren:'../app/view-one/view-one.module#ViewOneModule'
    },
    {
      path:"view-two",
      loadChildren:'../app/view-two/view-two.module#ViewTwoModule'
    },
    {
      path:"view-three",
      loadChildren:'../app/view-three/view-three.module#ViewThreeModule'
    },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }

