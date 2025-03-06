import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { InstallationGuideComponent } from "../installation-guide/installation-guide.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgClass, RouterOutlet,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  humberg:boolean=true
}
