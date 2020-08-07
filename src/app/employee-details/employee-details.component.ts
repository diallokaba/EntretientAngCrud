import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

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

  Employee_list() {
    this.router.navigate(['employees']);
  }
}
