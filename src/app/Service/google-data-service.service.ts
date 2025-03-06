import { Injectable } from '@angular/core';
declare const google:any
@Injectable({
  providedIn: 'root'
})
export class GoogleDataServiceService {

  constructor() { }
  initGoogleSSo(){
    google.accounts.id.initialize({
      client_id: '493225894715-er35fcpu8grrnu62pcrbab1j92g6hovl.apps.googleusercontent.com',
      callback: this.handleCredentialResponse.bind(this)
    });
    const button = document.getElementById('google-signin-button');
      google.accounts.id.renderButton(document.getElementById('google-signin-button')!, {
        theme: 'outline', size: 'large',
        type: 'standard'
      });
  }
  googleData() {

  

  }

  handleCredentialResponse(response: any) {
    console.log('Encoded JWT ID token: ' + response.credential);
    // You can now send this token to your backend for verification
  }
}

