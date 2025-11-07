import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { CartService } from '../../shared/services/cart/cart.service';
import { User } from '../../shared/models/User';
import { Categories } from '../../shared/models/Products';
import { EditProfile } from './edit-profile/edit-profile';
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, CommonModule, EditProfile],// RouterLinkWithHref],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  router: Router;
  editIsOpen = false;
  menuIsOpen = false;
  width = window.innerWidth;
  currentUser: User | null = null;
  clientPanel = false
  sections = ['home', 'team', 'galery', 'blog'];
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
  logout() {
    this.authService.logOutUser();

  }
  navigate(path: string) {
    // acá puedes setear dirección o animación antes de navegar
    const split = this.router.url.split(/[/?]/);
    const current = split[2];
    const index = this.sections.indexOf(current);
    const targetIndex = this.sections.indexOf(path.split('/')[2]);
    if (index > targetIndex)
      document.documentElement.setAttribute('data-direction', 'left');
    else if (index < targetIndex)
      document.documentElement.setAttribute('data-direction', 'right');
    else
      document.documentElement.setAttribute('data-direction', '');
    // iniciar transición
    console.log(document.documentElement.getAttribute('data-direction'));
    document.startViewTransition(() =>
      this.router.navigateByUrl(path)
    )

  }


}
