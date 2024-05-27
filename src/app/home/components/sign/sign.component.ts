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
import { HttpResponse } from '@angular/common/http';
import { UsernameValidator } from './validators/Username-vlidator';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.scss',
})
export class SignComponent implements OnInit {
  userSignupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private usernameValidator: UsernameValidator
  ) {}

  ngOnInit(): void {
    this.userSignupForm = this.fb.group(
      {
        userName: [
          '',
          Validators.required,
          [this.usernameValidator.validate.bind(this.usernameValidator)],
        ],
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
      username: this.userSignupForm?.get('userName')?.value,
      firstName: this.firstName?.value,
      lastName: this.userSignupForm.get('lastName')?.value,
      email: this.userSignupForm.get('email')?.value,
      password: this.userSignupForm.get('password')?.value,
      phone: this.userSignupForm.get('phone')?.value,
      profile: 'default.png',
    };
    this.userService.createUser(user).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 201) {
          console.log('User created successfully', response.body);
        } else {
          console.log('Unexpected status code', response.status);
        }
      },
      (error) => {
        if (error.status === 409) {
          console.log('User already exists', error.error, error);
        } else {
          console.log('An error occurred', error);
        }
      }
    );
  }
}
