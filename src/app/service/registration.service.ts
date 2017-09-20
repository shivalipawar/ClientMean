import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {
  constructor(private http: Http) {
    console.log("Task Service Initialized....");
   }

   register(empId : String , emailId :String){
    return this.http.post('http://localhost:3000/register', { empId: empId, emailId: emailId })
    .map((response: Response) =>response.json());
   }

}
