import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { MessageService } from '../_services/message.service';
import { LicenseTypesService } from '../_services/license-types.service';

@Component({
  selector: 'app-license-types',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.scss']
})
export class LicensesComponent implements OnInit {

  licenseTypes: Object;

  constructor(
    private haha: LicenseTypesService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.haha.getLicenseTypes().subscribe(data => {
      this.licenseTypes = data
      console.log(this.licenseTypes);
    }
    );
  }

}

