import { Component, OnInit } from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: SocialAuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }


  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
