import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  constructor(private _authservice:AuthService,private router:Router) { }
  email:string='';
  password:string='';

  ngOnInit(): void {
  }
  onSubmit(){
    if(this._authservice.login(this.email,this.password)){
             alert("login sucess");
             this.router.navigateByUrl('/note-view')
    }
    else{
      alert("login failed");
      this.router.navigateByUrl("/login")

    }

  }
  canExist(){
    if(this.email.trim().length>0 || this.password.trim().length>0){
      return confirm("data will be discarded .\nare u sure? ")
    }
    else{
      return true;
    }
  }
}
