import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(public router: Router) {}


  isRegister(){
    return this.router.url.includes('signup');
  }

}
