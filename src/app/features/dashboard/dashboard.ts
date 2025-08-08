import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
  isActive(route: string): boolean {
    const currentUrl = window.location.pathname;
    return currentUrl.includes(route);
  }
}
