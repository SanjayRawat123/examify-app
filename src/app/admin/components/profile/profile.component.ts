import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  profileImageSrc: string = '/assets/user-profile/user-09.jpg'; // Default profile image path

  // onFileSelected(event: any): void {
  //   console.log("hello click ")
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.profileImageSrc = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }
}
