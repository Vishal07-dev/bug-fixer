import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleDataServiceService } from './Service/google-data-service.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bug-fixer';
  constructor(private googleauthServie: GoogleDataServiceService
  ){
  }
}
