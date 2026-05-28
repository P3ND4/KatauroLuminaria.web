import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Router, RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { CartService } from '../../shared/services/cart/cart.service';
import { ASSETS } from '../../shared/constants/image-library';
import { User } from '../../shared/models/User';
import { EditProfile } from './edit-profile/edit-profile';
import { routeAnimations } from '../../shared/animations/routerAnimation';
import { BoxLoader } from "../../shared/components/box-loader/box-loader";
import { ErrorLogService } from '../../shared/services/errors/error.log.service';
import { parseError } from '../../shared/services/errors/errorParser';
import { DiscoverMoreComponent } from './discover-more/discover-more';
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink, CommonModule, EditProfile, BoxLoader, DiscoverMoreComponent],
  animations: [routeAnimations],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit, AfterViewInit {
  readonly ASSETS = ASSETS;
  router: Router;
  editIsOpen = false;
  menuIsOpen = false;

  currentUser: User | null = null;
  clientPanel = false
  sections = ['home', 'team', 'galery', 'blog'];
  loadingMsg = '';
  loading = false;
  globalErrors: { name: string, error: string }[] = []
  @ViewChild('outlet') outlet!: RouterOutlet;
  constructor(router: Router, readonly authService: AuthService, readonly cartService: CartService, private route: ActivatedRoute, private cdr: ChangeDetectorRef, public readonly errorServ: ErrorLogService) {
    this.router = router;
    this.errorServ.errors.subscribe((val) => this.globalErrors = val);
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    //router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(() => this.prepareRoute(this.outlet));

  }


  ngOnInit() {

    this.loadUser();
  }
  ngAfterViewInit() {

  }


  loadUser() {
    try {
      this.authService.refreshUser();
      this.authService.currentUser$.subscribe(user => {
        this.currentUser = user;
        if (this.currentUser) {
          this.cartService.loadCart();
        }
      });
    } catch (error) {
      console.error('Error refreshing user:', error);
      this.loading = false;
      //this.errorServ.addError(parseError(error as any));

    }
  }



  isActive(route: string): boolean {
    const currentUrl = this.router.url;
    return currentUrl.includes(route);
  }
  isLogged() {
    const isloged = this.authService.isLogged()
    if (isloged) this.loading = false
    return isloged;
  }
  currentYear = new Date().getFullYear();

  plataformId = inject(PLATFORM_ID);

  isMobile() {
    if (isPlatformBrowser(this.plataformId)) {
      return innerWidth < 800;
    }
    return false;
  }
  toggleMenu() {
    this.menuIsOpen = this.menuIsOpen ? false : true
  }
  navigateMobile(route: string) {
    this.menuIsOpen = false;
    this.router.navigate([route]);

  }
  logout() {
    try {
      this.loading = true;
      this.loadingMsg = 'Cerrando...'
      this.authService.logOutUser();

    } catch (error) {
      console.log(error);
    }

  }
  navigate(path: string) {
    // acá puedes setear dirección o animación antes de navegar
    const split = this.router.url.split(/[/?]/);
    const current = split[2];
    const index = this.sections.indexOf(current);
    const targetIndex = this.sections.indexOf(path.split('/')[2]);
    if (isPlatformBrowser(this.plataformId)) {
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
      );
    } else {
      this.router.navigateByUrl(path);
    }

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
  toggleEdit(update?: boolean) {
    this.editIsOpen = !this.editIsOpen;
    this.clientPanel = false
    if (this.editIsOpen) this.lockScroll()
    else if (update) {
      this.loadingMsg = 'Actualizando...';
      this.loading = true;
      this.unlockScroll();
      this.loadUser();
    } else this.unlockScroll();

  }
  lockScroll(): void {
    if (isPlatformBrowser(this.plataformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  unlockScroll(): void {
    if (isPlatformBrowser(this.plataformId)) {
      document.body.style.overflow = '';
    }
  }
}
