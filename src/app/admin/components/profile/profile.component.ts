import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/backend-services/user-service/user.service';
import { Data } from 'src/types/examify-interface';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  profileImageSrc: string = '/assets/user-profile/user-09.jpg'; // Default profile image path
   user!:Data.User;

  constructor(private userService:UserService) {
    
  }

  ngOnInit(): void {
    this.user=  this.userService.getUser()
    console.log(this.user)
  }

  onFileSelected(event: any): void {
    console.log('hello click ');
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImageSrc = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  
}
