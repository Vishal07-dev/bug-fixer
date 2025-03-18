import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleDataServiceService {
  router = inject(Router);

  constructor() { }

  initGoogleSSo() {
    google?.accounts.id.initialize({
      client_id: '493225894715-er35fcpu8grrnu62pcrbab1j92g6hovl.apps.googleusercontent.com',
      callback: this.handleCredentialResponse.bind(this),
      ux_mode: 'popup', // ✅ Force popup mode to avoid COOP issues
    });

    google?.accounts.id.renderButton(document.getElementById('google-signin-button'), {
      theme: 'outline',
      size: 'large',
      type: 'standard'
    });
  }


  handleCredentialResponse(response: any) {
    console.log('Encoded JWT ID token:', response.credential);
    // Decode the JWT token to extract user details
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    console.log('User Email:', payload.email);

    // Store email (optional: use localStorage or pass to a state management service)
    localStorage.setItem('userEmail', payload.email);
    this.router.navigateByUrl('welcome')


    // Redirect to welcome page

  }
}
