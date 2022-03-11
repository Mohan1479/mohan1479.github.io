import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(private router: Router) { }

  signInUser(email: string,password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {

        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => {
            this.token = token;
            console.log(token);
              let params = { "token": this.token };
              let navigationExtras: NavigationExtras = {
              queryParams: {
              special: JSON.stringify(params)
              }
            };
            this.router.navigate(['home'],navigationExtras);
          }
        )
      }
    )
    .catch(
      error => {
        console.log(error);
          this.router.navigate(['signIn']);
      }
    );
  }
}
