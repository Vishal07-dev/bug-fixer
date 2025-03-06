import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {



  email: any;
  password: any;

  constructor() { }
  loginData:any={
    id:1,
    name:"vishal",
    email:"vishal567@gmail.com",
    password:"vishal@8320"
  }

  
  getLoginData()
  {
    localStorage.setItem("LoginData",this.loginData.id)
    return this.loginData
  }
  
}
