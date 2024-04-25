import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { matchPasswords } from './validators/match-passwords.validator';
import { UserService } from 'src/app/backend-services/user-service/user.service';
import { Data } from 'src/types/examify-interface';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.scss',
})
export class SignComponent implements OnInit {
  userSignupForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userSignupForm = this.fb.group(
      {
        userName: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: [''],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        phone: ['', Validators.required],
        profile: [''],
      },
      {
        validator: matchPasswords,
      }
    );
  }

  get userName(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('userName');
  }

  get firstName(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('firstName');
  }

  get email(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('email');
  }

  get password(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('password');
  }

  get confirmPassword(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('confirmPassword');
  }
  get phone(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('phone');
  }
  onSubmit(): void {
    const user: Data.UserSigUp = {
      userName: this.userSignupForm?.get('userName')?.value,
      firstName: this.firstName?.value,
      lastName: this.userSignupForm.get('lastName')?.value,
      email: this.userSignupForm.get('email')?.value,
      password: this.userSignupForm.get('password')?.value,
      phone: this.userSignupForm.get('phone')?.value,
      profile: 'default.png',
    };
    this.userService.createUser(user).subscribe(
      (data: Data.UserSigUp) => {
        console.log(data);
      },
      (erorr) => {
        console.log(erorr);
      }
    );
  }
}
