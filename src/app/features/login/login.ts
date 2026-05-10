import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ASSETS } from '../../shared/constants/image-library';
import { optimizeUrlCloudy } from '../../shared/utils/optimizeUrlCloudy';


@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  readonly ASSETS = ASSETS;
  constructor(public router: Router) {}


  isRegister(){
    return this.router.url.includes('signup');
  }
  optimizeImage = optimizeUrlCloudy;
}
