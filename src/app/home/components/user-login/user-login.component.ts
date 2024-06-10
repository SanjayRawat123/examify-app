import { Component, ViewEncapsulation, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/backend-services/user-service/user.service';
import { Data } from 'src/types/examify-interface';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class UserLoginComponent {
  userLoginForm!: FormGroup;
  alertType: number = 0;
  alertMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snack: MatSnackBar,
    private route:Router
  ) {}

  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  get userName(): AbstractControl<any, any> | null {
    return this.userLoginForm.get('userName');
  }

  get password(): AbstractControl<any, any> | null {
    return this.userLoginForm.get('password');
  }

  onSubmit(): void {
    const userLogin: Data.UserLogin = {
      username: this.userName?.value,
      password: this.password?.value,
    };
    this.userService.login(userLogin).subscribe({
      next: (result: Data.LoginToken) => {
        console.log(result);
        this.userService.loginUser(result.token);
        this.userService.getCurrenUser().subscribe((user: Data.User) => {
          this.userService.setUser(user);
          console.log(user);
          this.showSuccess();
          if (this.userService.userRole() == 'Admin') {
            this.route.navigate(['admin'])
          }else{
            this.route.navigate(['user'])
          }
        });
      },
      error: (error) => {
        console.log('error', error);
        this.alertType = 2;
        this.alertMessage = error.error.message;
      },
    });
  }

  showSuccess() {
    const user: Data.User = this.userService.getUser();
    const userRole = this.userService.userRole();
    this.snack.open(
      `You have successfully logged in as an  ${userRole} user to Examify.
       Now you can start to explore. Enjoy! 🎉 .
       👋 Welcome,' ${user.firstName} ${user.lastName} + '!'`,
      '',
      {
        duration: 7000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      }
    );
  }
}
