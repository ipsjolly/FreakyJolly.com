import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewTwoComponent } from "./view-two.component";

const routes: Routes = [
    { path:"", component: ViewTwoComponent }
];

@NgModule({
    exports: [RouterModule],
    imports:[RouterModule.forChild(routes)]
})

export class ViewTwoRoutingModule{}