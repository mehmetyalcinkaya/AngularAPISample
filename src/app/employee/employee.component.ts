import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  employees: Employee[] = [];
  ngOnInit() {
    alert("test");
    this.getEmployees().subscribe(data => {
      this.employees = data;

    });

  }

  getEmployees() {
    return this.http.get<Employee[]>("https://localhost:44318/api/employees");
  }

}
