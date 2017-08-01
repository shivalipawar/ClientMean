import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
// import {AlertService } from 'app/service/alert.service'; 
// import {UserService } from 'app/service/user.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  model: any ={};
  loading= false;

  constructor(
    private router: Router,
    //private userService : UserService,
    ) { }

  ngOnInit() {
  }

  register(){
    this.loading =true;
    // this.userService.create(this.model)
    //     .subscribe(
    //       data=>{
    //         this.alertService.success("Registration Successful",true);
    //         this.router.navigate(['/login']);
    //       },
    //       error =>{
    //         this.alertService
    //       }
    //     )
  }
}
