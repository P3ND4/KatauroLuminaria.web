import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { CartService } from '../../shared/services/cart/cart.service';
import { User } from '../../shared/models/User';
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{
  router: Router;
  menuIsOpen = false
  width = window.innerWidth;
  currentUser: User | undefined = undefined;
  constructor(router: Router, private authService: AuthService, private cartService: CartService) {
    this.router = router;
    this.currentUser = this.authService.currentUser;
  }
  ngOnInit(): void {

  }
  isActive(route: string): boolean {
    const currentUrl = window.location.pathname;
    return currentUrl.includes(route);
  }
  isLogged(){
    return this.authService.isLogged()
  }
  changeWidth(an: number){
    this.width = window.innerWidth;
  }
  isMobile(){
    return innerWidth < 800
  }
  toggleMenu(){
    this.menuIsOpen = this.menuIsOpen? false : true
  }
  navigateMobile(route: string){
    this.menuIsOpen = false;
    this.router.navigate([route]);

  }

}
