import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../_services/employees.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  employees: Object;

  constructor(private empl: EmployeeService)   { }

  ngOnInit() {
    this.empl.getEmployees().subscribe(data => {
      this.employees = data
      console.log(this.employees);
    }
    );
  }

}
