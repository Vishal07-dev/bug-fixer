import { Component } from '@angular/core';  
import gsap from 'gsap';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-welcome-page',
  imports: [],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {

  constructor(private router: Router) {} // Inject Router to navigate pages

  
  onClick()
  {
    this.router.navigate(['home'])
  }
}
