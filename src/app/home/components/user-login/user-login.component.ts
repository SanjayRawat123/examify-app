import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/backend-services/user-service/user.service';
import { Data } from 'src/types/examify-interface';

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
    private userService: UserService,
    private toastr: ToastrService
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
        this.userService.getCurrenUser().subscribe((user: any) => {
          this.userService.setUser(user);
          console.log(user);
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
    // const user: Data.UserSigUp = this.getUser();
    console.log('heloi');
    this.toastr.success(
      'You have successfully logged in as an ' +
        
        ' user to Vuexy. Now you can start to explore. Enjoy! 🎉',
      '👋 Welcome,  !',
      { toastClass: 'toast ngx-toastr', closeButton: true }
    );
  }
}
