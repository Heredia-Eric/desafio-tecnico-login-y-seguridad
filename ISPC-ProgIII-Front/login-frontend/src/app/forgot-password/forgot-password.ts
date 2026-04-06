import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private router = inject(Router);

  paso = 1;
  mensaje = '';
  error = '';
  usernameGuardado = '';

  paso1Form: FormGroup = this.fb.group({
    username: ['', Validators.required]
  });

  paso2Form: FormGroup = this.fb.group({
    otp: ['', Validators.required],
    new_password: ['', [Validators.required, Validators.minLength(8)]]
  });

  solicitarOTP() {
    if (this.paso1Form.valid) {
      const { username } = this.paso1Form.value;
      this.http.post('http://localhost:8000/api/request-otp/', { username }).subscribe({
        next: (res: any) => {
          this.usernameGuardado = username;
          this.mensaje = res.message;
          this.error = '';
          this.paso = 2;
        },
        error: (err) => {
          this.error = 'Usuario no encontrado.';
          this.mensaje = '';
        }
      });
    }
  }

  verificarOTP() {
    if (this.paso2Form.valid) {
      const { otp, new_password } = this.paso2Form.value;
      this.http.post('http://localhost:8000/api/verify-otp/', {
        username: this.usernameGuardado,
        otp,
        new_password
      }).subscribe({
        next: (res: any) => {
          this.mensaje = res.message;
          this.error = '';
          setTimeout(() => this.router.navigate(['/login']), 2000);
        },
        error: (err) => {
          this.error = 'Código OTP incorrecto.';
        }
      });
    }
  }

  volver() {
    this.router.navigate(['/']);
  }
}