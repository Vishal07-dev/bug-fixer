import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleDataServiceService {
  router = inject(Router);
  private scriptLoaded = false; // Prevent multiple script loads

  constructor() { }

  async initGoogleSSo() {
    await this.loadGoogleScript(); // Ensure script is loaded before initializing

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
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    console.log('User Email:', payload.email);

    // Store email (optional: use localStorage or pass to a state management service)
    localStorage.setItem('userEmail', payload.email);

    // Redirect to welcome page
    this.router.navigateByUrl('welcome');
  }

  private loadGoogleScript(): Promise<void> {
    return new Promise((resolve) => {
      if (this.scriptLoaded) {
        return resolve(); // ✅ Script is already loaded, no need to reload
      }

      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.id = 'google-js';
      script.onload = () => {
        this.scriptLoaded = true;
        resolve();
      };
      document.body.appendChild(script);
    });
  }
  preloadGoogleScript() {
    if (!document.getElementById('google-login')) {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.id = 'google-js';
      document.head.appendChild(script);
    }
  }
  
}
