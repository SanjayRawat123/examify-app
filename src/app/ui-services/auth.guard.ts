import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../backend-services/user-service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      const role = this.authService.userRole();
      if (role === 'Admin') {
        this.router.navigate(['/admin']);
      } else if (role === 'Student') {
        this.router.navigate(['/user-dashboard']);
      }
      return false; // Prevent further navigation
    }
    return true; // Allow navigation to home
  }
}
