import { NgModule } from "@angular/core";
import { ViewOneRoutingModule } from "./view-one-routing.module";
import { ViewOneComponent } from "./view-one.component";

@NgModule({
    declarations:[ViewOneComponent],
    imports:[ViewOneRoutingModule],
    providers: []
    
})
export class ViewOneModule{

}