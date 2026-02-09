import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

authService = inject(UserAuthService);
router = inject(Router);
userForm = new FormGroup({
email: new FormControl('', [Validators.required, Validators.email]),
password: new FormControl ('', [Validators.required])
});

login() {

  if (this.userForm.invalid) return;
  const {email, password} = this.userForm.value;

  this.authService.login(email!, password!).subscribe({next: () => {this.router.navigate(['/products'])  
  }})
}
}
