import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { MessageService } from '../_services/message.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    private http: HttpClient
    , private messageService: MessageService
  ) { }

  getUsers() {
    this.messageService.add('Hello, Simon');
    return this.http.get('https://reqres.in/api/users')
  }
}
