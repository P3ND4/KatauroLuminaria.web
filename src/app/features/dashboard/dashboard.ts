import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { CartService } from '../../shared/services/cart/cart.service';
import { User } from '../../shared/models/User';
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  router: Router;
  menuIsOpen = false
  width = window.innerWidth;
  currentUser: User | null = null;
  constructor(router: Router, readonly authService: AuthService, readonly cartService: CartService) {
    this.router = router;
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
  async ngOnInit(): Promise<void> {
    try {
      await this.authService.refreshUser();
      this.authService.currentUser$.subscribe(user => {
        this.currentUser = user;
        if (this.currentUser) this.cartService.loadCart()
      });
    } catch (error) {
      console.error('Error refreshing user:', error);
    }
    
  }
  isActive(route: string): boolean {
    const currentUrl = window.location.pathname;
    return currentUrl.includes(route);
  }
  isLogged() {
    return this.authService.isLogged()
  }
  changeWidth(an: number) {
    this.width = window.innerWidth;
  }
  isMobile() {
    return innerWidth < 800
  }
  toggleMenu() {
    this.menuIsOpen = this.menuIsOpen ? false : true
  }
  navigateMobile(route: string) {
    this.menuIsOpen = false;
    this.router.navigate([route]);

  }
  logout(){
    this.authService.logOutUser();

  }

}
