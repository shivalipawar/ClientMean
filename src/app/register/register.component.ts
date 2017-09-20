import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { RegistrationService } from "app/service/registration.service";

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
    private registerService : RegistrationService) {
        var username ="Sana";
        var email ="Sam@eaton.com";
        this.registerService.register(username, email).subscribe(registerService =>{          //Register function was like register(this.model.username, this.model.email)
          console.log(registerService);
        })
     }

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
