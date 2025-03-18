import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem("userEmail") !== null;

  // Check which route the user is trying to access
  const targetUrl = route.url.map(segment => segment.path).join('/');

  // If user is logged in and tries to access 'login', redirect to 'welcome'
  if (targetUrl === "login" && isLoggedIn) {
    router.navigateByUrl("/welcome");
    return false;
  }

  // If user is NOT logged in and tries to access a protected page, redirect to 'login'
  if (!isLoggedIn && targetUrl !== "login") {
    router.navigateByUrl("/login");
    return false;
  }

  return true; // ✅ Allow navigation if conditions are met
};
