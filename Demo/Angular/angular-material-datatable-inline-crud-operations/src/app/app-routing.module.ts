// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './pages/students/students.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  {
    path: 'students',
    component: StudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
