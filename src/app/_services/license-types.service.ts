import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { MessageService } from '../_services/message.service';


@Injectable({
  providedIn: 'root'
})
export class LicenseTypesService {

  constructor(
    public http: HttpClient
    , public messageService: MessageService
  ) { }

  getLicenseTypes() {
    this.messageService.add('Hello, Simon');
    return this.http.get('https://apidev.consumerprotectionbc.ca/api/License/LicenseTypeList')
  }
}
