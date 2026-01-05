import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet, RouterLinkWithHref, ActivatedRoute, NavigationStart } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { CartService } from '../../shared/services/cart/cart.service';
import { User } from '../../shared/models/User';
import { Categories } from '../../shared/models/Products';
import { EditProfile } from './edit-profile/edit-profile';
import { routeAnimations } from '../../shared/animations/routerAnimation';
import { BoxLoader } from "../../shared/components/box-loader/box-loader";
import { filter } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, CommonModule, EditProfile, RouterLinkWithHref],// RouterLinkWithHref],
  animations: [routeAnimations],
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
  @ViewChild('outlet') outlet!: RouterOutlet;
  constructor(router: Router, readonly authService: AuthService, readonly cartService: CartService, private route: ActivatedRoute) {
    this.router = router;
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    //router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(() => this.prepareRoute(this.outlet));

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

  prevIndex = 0;
  direction: 'left' | 'right' = 'left';

  prepareRoute(outlet: RouterOutlet) {
    this.prevIndex = outlet?.activatedRouteData?.['index'] ?? this.prevIndex;
    return this.prevIndex;
  }

  onAnimationStart(outlet: RouterOutlet) {
    console.log(this.direction);
  }
  onAnimationDone(outlet: RouterOutlet) {
    this.prevIndex = outlet?.activatedRouteData?.['index'] ?? 0;
  }
  toggleEdit() {
    this.editIsOpen = !this.editIsOpen;
    this.clientPanel = false
    this.editIsOpen ? this.lockScroll() : this.unlockScroll();
  }
  lockScroll(): void {
     document.body.style.overflow = 'hidden';
  }

  unlockScroll(): void {
    document.body.style.overflow = '';
  }
}
