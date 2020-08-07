import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private url = 'http://localhost:8089/api/path1/employees';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.url}`, employee);
  }

  // tslint:disable-next-line:ban-types
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
