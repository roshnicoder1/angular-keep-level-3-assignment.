// import { Component } from '@angular/core';
// import { FormControl } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//     username = new FormControl();
//     password = new FormControl();

//     loginSubmit() {

//     }
// }



import { Component, OnInit} from '@angular/core';
import { FormControl,  Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitMessage : string;

  constructor(private authService: AuthenticationService, private routerService: RouterService){}
   
  ngOnInit(){
  }
    // loginForm = new FormGroup({
      username = new FormControl('',[Validators.required]);
      password = new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]);
  
   
    loginSubmit() {
      
      // console.log(this.loginForm.value);
      let username=this.username.value;
      let password=this.password.value;

      this.authService.authenticateUser({username,password}).subscribe((data)=>{
        console.log(data);
      this.authService.setBearerToken(data['token']);
      this.routerService.routeToDashboard();
    },
      (err)=>{
        if(err.status== '403'){
          this.submitMessage="Unauthorized";
        }
        else{
     
        this.submitMessage= err.message;
        }
    })


    }

  }