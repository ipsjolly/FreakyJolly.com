//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create' },
  { path: 'create', component: StudentCreateComponent },
  { path: 'edit/:id', component: StudentEditComponent},
  { path: 'list', component: StudentListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
