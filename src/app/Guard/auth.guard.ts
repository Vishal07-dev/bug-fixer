import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const ServiceData=localStorage.getItem("LoginData")
  if(ServiceData !== null)
  {
    return true
  }
  else
  {
    router.navigateByUrl("login")
    return false
  }
};
