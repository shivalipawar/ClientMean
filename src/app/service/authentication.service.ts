import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post('http://localhost:3000/login', { username: username, password: password })
            .map((response: Response) => {
                // tslint:disable-next-line:prefer-const
                let user = response.json();
                if (user && user.token) {
                    console.log(user);
                    localStorage.setItem('token', user.token);
                    localStorage.setItem('currentUser', JSON.stringify(user.user[0]));
                }
            });
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
    }
}