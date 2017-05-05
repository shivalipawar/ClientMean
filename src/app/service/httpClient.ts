import {Injectable} from '@angular/core';
import {Http, Headers , RequestOptions} from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(private http: Http) {}

  createAuthorizationHeader() {
       const headers = new Headers({
            'x-access-token': localStorage.getItem('token'),
            'x-key': JSON.parse(localStorage.getItem('currentUser')).UserName
        });
        return new RequestOptions({ headers: headers });
  }

  get(url) {
    const headers = new Headers();
    ;
    return this.http.get(url, this.createAuthorizationHeader());
  }

  post(url, data) {
    const headers = new Headers();
    return this.http.post(url, data, this.createAuthorizationHeader());
  }
}