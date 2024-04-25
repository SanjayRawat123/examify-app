import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
})
export class UserLoginComponent {
  userLoginForm!: FormGroup;
  alertType: number = 0;
  alertMessage: string = '';

  constructor(
    private fb: FormBuilder,
    // private userService: UserService,
    // private location: Location
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
    //   this.userService.login(this.email?.value, this.password?.value).subscribe({
    //     next: (result: LoginToken) => {
    //       result.user.email = this.email?.value;
    //       this.userService.activateToken(result);
    //       this.alertType = 0;
    //       this.alertMessage = 'Login successful';
    //       setTimeout(() => {
    //         this.location.back();
    //       }, 1000);
    //     },
    //     error: (error) => {
    //       this.alertType = 2;
    //       this.alertMessage = error.error.message;
    //     },
    //   });
    // }
  }
}
