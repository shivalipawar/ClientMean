import { Injectable } from '@angular/core';
import { HttpClient } from './httpClient';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StatusService {

constructor(private http: HttpClient) { }


getAllStatus(): Observable<any> {
    return this.http.get('http://localhost:3000/api/status').map((res) => res.json());
  }

getByDate(date): Observable<any> {
    return this.http.get('http://localhost:3000/api/status/' + date).map((res) => res.json());
  }

getByDateUser(date, user): Observable<any> {
    return this.http.get('http://localhost:3000/api/status/' + date + '/' + user).map((res) => res.json());
  }
updateStatusByUser(userdata): any {
    return this.http.post('http://localhost:3000/api/status' , userdata);
    }
  }
