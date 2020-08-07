import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../Employee';
import {Router} from '@angular/router';
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employee: Observable<Employee[]>;

  constructor(private es: EmployeeServiceService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employee = this.es.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.es.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number) {
    this.router.navigate(['emp-detail', id]);
  }

  employeeUpdate(id: number) {
    this.router.navigate(['update-emp', id]);
  }
}
