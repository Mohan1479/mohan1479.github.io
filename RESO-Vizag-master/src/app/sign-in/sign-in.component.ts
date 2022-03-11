import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email = '';
  password = '';

  loginForm:FormGroup;

  constructor(private authService: AuthService) { }

  ngOnDestroy(): void {

  }
  

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'loginData': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required]),
      })
    });
  }

  onSubmit(form: FormGroup) {
    
    this.email = form.value.loginData.email;
    this.password = form.value.loginData.password;
    console.log(this.loginForm);
    this.authService.signInUser(this.email, this.password);
  }
}
