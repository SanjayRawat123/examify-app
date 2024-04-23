import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { matchPasswords } from './validators/match-passwords.validator';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.scss',
})
export class SignComponent implements OnInit {
  userSignupForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  // export interface UserSigUp {
  //   id?: number;
  //   userName: string;
  //   password: string;
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  //   phone: string;
  //   profile: string;
  // }
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

  get userName(): AbstractControl<string, string> | null {
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
  onSubmit(): void {}
}
