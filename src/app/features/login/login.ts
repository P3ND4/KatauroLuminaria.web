import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ASSETS } from '../../shared/constants/image-library';


@Component({
  selector: 'app-login',
  imports: [CommonModule, NgOptimizedImage, RouterOutlet, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  readonly ASSETS = ASSETS;
  constructor(public router: Router) {}


  isRegister(){
    return this.router.url.includes('signup');
  }
}
