import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor() { }
  isLoggedIn:boolean=false;

  login(emid:string,pwd:string){
    if(emid.trim()=="pavanpadamati95@gmail.com" && pwd.trim()=="Pavan@123"){
      this.user= {emid:"pavanpadamati95@gmail.com"}
      this.isLoggedIn=true;
      console.log("login services");
      return true;
    }
    else{
     
      this.isLoggedIn=false;
      console.log("login service failed");
      return false
    }

  }
  logout():void{
    this.user=null;
    this.isLoggedIn=false;

  }
  isUserLoggedIn():boolean{
    return this.isLoggedIn
  }
}
