import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewThreeComponent } from "./view-three.component";

const routes: Routes = [
    { path:"", component: ViewThreeComponent }
];

@NgModule({
    exports: [RouterModule],
    imports:[RouterModule.forChild(routes)]
})

export class ViewThreeRoutingModule{}