import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../_services/employees.service';
import { DataService } from '../_services/data.service';
import { MessageService } from '../_services/message.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  persons: Object;

  constructor(
    private data: DataService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.persons = data
      console.log(this.persons);
    }
    );
  }

}
