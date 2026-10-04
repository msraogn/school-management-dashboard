import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'School Management Dashboard';

  constructor(public router: Router) {}

  showTabs(): boolean {
    return this.router.url !== '/login';
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
