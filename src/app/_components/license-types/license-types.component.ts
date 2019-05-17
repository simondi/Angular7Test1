import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { MessageService } from '../../_services/message.service';
import { LicenseTypesService } from '../../_services/license-types.service';

@Component({
  selector: 'app-license-types',
  templateUrl: './license-types.component.html',
  styleUrls: ['./license-types.component.scss']
})
export class LicenseTypesComponent implements OnInit {

  licenseTypes: Object;

  constructor(
    private data: LicenseTypesService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.data.getLicenseTypes().subscribe(data => {
      this.licenseTypes = data
      console.log(this.licenseTypes);
    }
    );
  }

}
