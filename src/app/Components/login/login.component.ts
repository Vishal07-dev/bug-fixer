declare let google: any 
import {  AfterViewChecked, AfterViewInit,  Component, inject, NgZone, OnInit} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FromtoggleComponent } from "../../reusable/fromtoggle/fromtoggle.component";
import { LoginDataService } from '../../Service/login-data.service';
import { GoogleDataServiceService } from '../../Service/google-data-service.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  imports: [RouterLink, FromtoggleComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements AfterViewChecked,OnInit  {
 
  logincredntial:any={
    name:'',
    email:'',
    password:''
  }

  btnValue:string[]=['Login','Sign-up']
  currentValue:string='Login'
  router=inject(Router)
  toaster=inject(ToastrService)
  user:any;
  loggedIn:any;
  constructor(
    private readonly Logindata: LoginDataService,
    private readonly zone: NgZone,
    private googleAuthService: GoogleDataServiceService,

  ) {
   }

  ngAfterViewChecked(): void {

  }

  ngOnInit(): void {
    this.googleAuthService.initGoogleSSo()

  }

  validateForm()
  {
    console.log(this.logincredntial);
    
    
    if(this.logincredntial.email == this.Logindata.getLoginData().email && this.logincredntial.password == this.Logindata.getLoginData().password)
    {
      this.router.navigateByUrl("welcome")
    }
    else{
     this.toaster.warning("Wrong Credintials","Warning")
      
    }
  }
  OnClick(tabname:string)
  {
    this.currentValue=tabname
    
  }


}
