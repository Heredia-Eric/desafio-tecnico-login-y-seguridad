import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private router = inject(Router);

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  errorMessage: string = '';
  rememberMe: boolean = false;

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.http.post('http://localhost:8000/api/login/', { username, password }).subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          if (this.rememberMe) {
            localStorage.setItem('token', response.access);
          } else {
            sessionStorage.setItem('token', response.access);
          }
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Login failed', error);
          this.errorMessage = 'Usuario o contraseña incorrectos.';
        },
      });
    }
  }
}
