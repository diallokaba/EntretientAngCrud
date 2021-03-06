import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {EmployeeUpdateComponent} from './employee-update/employee-update.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-emp', component: CreateEmployeeComponent },
  { path: 'update-emp/:id', component: EmployeeUpdateComponent },
  { path: 'emp-detail/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
