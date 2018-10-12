import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewOneComponent } from "./view-one.component";

const routes: Routes = [
    { path:"", component: ViewOneComponent }
];

@NgModule({
    exports: [RouterModule],
    imports:[RouterModule.forChild(routes)]
})

export class ViewOneRoutingModule{}