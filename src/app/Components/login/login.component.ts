import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject
} from '@angular/core';
import { Router } from '@angular/router';
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
  isLoginModalOpen: boolean = false;

  googleService = inject(GoogleDataServiceService);
  private toaster = inject(ToastrService);
  private router = inject(Router);

  @ViewChild('googleButton', { static: false }) googleButton!: ElementRef;

  toggleLoginModal() {
    this.isLoginModalOpen = !this.isLoginModalOpen;

    // Delay rendering the button after modal is opened
    setTimeout(() => {
      if (this.isLoginModalOpen && this.googleButton) {
        this.renderGoogleSignIn();
      }
    }, 50);
  }

  ngAfterViewInit(): void {
    // Optional: Preload Google script in advance (if not already loaded)
    this.googleService.preloadGoogleScript();
  }

  renderGoogleSignIn() {
    if ((window as any).google && this.googleButton.nativeElement.childElementCount === 0) {
      (window as any).google.accounts.id.initialize({
        client_id: '493225894715-er35fcpu8grrnu62pcrbab1j92g6hovl.apps.googleusercontent.com',
        callback: (response: any) => this.handleCredentialResponse(response),
      });

      (window as any).google.accounts.id.renderButton(
        this.googleButton.nativeElement,
        { theme: 'outline', size: 'large' }
      );
    }
  }

  handleCredentialResponse(response: any) {
    console.log('Google credential received:', response.credential);
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    this.userEmail = payload.email; // You can decode JWT here
    localStorage.setItem('userEmail', payload.email);
    this.toaster.success('Login Successful!');
    this.isLoginModalOpen = false;
    this.router.navigate(['/welcome']);
  }
}
