import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.email === 'admin@school.com' && this.password === '123') {
      this.router.navigate(['/home']);
    }
  }
}
