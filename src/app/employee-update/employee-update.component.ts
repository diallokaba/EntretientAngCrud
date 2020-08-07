import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute, private router: Router,
              private es: EmployeeServiceService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params.id;

    this.es.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.es.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
