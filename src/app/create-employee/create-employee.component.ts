import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import {EmployeeServiceService} from '../employee-service.service';
import {Router} from '@angular/router';
import {Observable} from "rxjs";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  employees: Observable<Employee[]>;

  constructor(private es: EmployeeServiceService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.es.getEmployeesList();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }
  save() {
    this.es.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/employees']);
  }
}
