import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {CreateStudentComponent} from './create-student/create-student.component';


const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'student', component: StudentListComponent },
  { path: 'add', component: CreateStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
