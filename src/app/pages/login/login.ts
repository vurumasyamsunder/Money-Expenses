import { Component, inject, Inject, Injectable, OnInit } from '@angular/core';
import { sharedModule } from '../../shared/shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [sharedModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
loginForm: FormGroup = new FormGroup({});  
  constructor(public fb: FormBuilder,private router: Router) {}
  _service=inject(Service);
  ngOnInit() {
    this.formConrtrolNames();
  }
  formConrtrolNames(){
   this.loginForm=this.fb.group({
     username: ['', Validators.required],
      password: ['', Validators.required]
   });
  }
Login() {
  debugger;
    if (this.loginForm.valid) {
      const username = this.loginForm.controls['username'].value;
      const password = this.loginForm.controls['password'].value;

      this._service.loginApi(username, password).subscribe({
        next: (res) => {
          console.log('Token:', res.token);
          localStorage.setItem('token', res.token);
           this.router.navigate(['/navigation']); 
        },
        error: (err) => {
          console.error('Login failed', err);
          alert('Invalid credentials!');
        }
      });
    } else {
      alert('Please enter username and password!');
    }
  }
}

