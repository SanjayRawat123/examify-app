import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/backend-services/user-service/user.service';

export const userGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserService);
  const router = inject(Router);

  if (authService.isLoggedIn() && authService.userRole() === 'Student') {
    return true;
  }

  router.navigate(['/home']);
  return false;
};
