import { AfterViewChecked, AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleDataServiceService } from '../../Service/google-data-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  userEmail: string | null = null;
  googleService = inject(GoogleDataServiceService);

  constructor(private router: Router, private toaster: ToastrService) { }

  ngAfterViewInit(): void {
    this.googleService.initGoogleSSo();
  }
}
