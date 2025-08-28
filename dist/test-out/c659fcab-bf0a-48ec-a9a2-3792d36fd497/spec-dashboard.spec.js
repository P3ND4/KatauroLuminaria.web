import {
  Router,
  RouterOutlet,
  init_router
} from "./chunk-BDMESMIK.js";
import "./chunk-MXDTIDWL.js";
import {
  CommonModule,
  init_common
} from "./chunk-YD3INBKK.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-EQYVKW6I.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\features\dashboard\dashboard.html
var dashboard_default;
var init_dashboard = __esm({
  "angular:jit:template:src\\app\\features\\dashboard\\dashboard.html"() {
    dashboard_default = `<div class="dashboard"\r
  style="box-sizing: border-box; min-height: 100vh; padding-top: 80px; display: flex; flex-direction: column;">\r
\r
\r
  <div class="navigation-bar">\r
    <div class="nav-links">\r
      <img class="Katauro-logo" src="/assets/Katauro.svg" />\r
      <a (click)="router.navigate(['/dashboard/home'])" [ngClass]="{'active': isActive('/dashboard/home')}">Inicio</a>\r
      <a (click)="router.navigate(['/dashboard/team'])" [ngClass]="{'active': isActive('/dashboard/team')}">Nuestro equipo</a>\r
      <a (click)="router.navigate(['/dashboard/galery'])" [ngClass]="{'active': isActive('/dashboard/galery')}">Luminarias</a>\r
      <a (click)="router.navigate(['/dashboard/blog'])" [ngClass]="{'active': isActive('/dashboard/blog')}">Blog</a>\r
    </div>\r
    <button class="button-base login">\r
      <label>Iniciar sesi\xF3n</label>\r
    </button>\r
  </div>\r
  <div class="router-content" style="\r
  display: flex; \r
  flex: 1; \r
  flex-direction: column; \r
  min-height: 0;\r
  \r
  ">\r
    <router-outlet />\r
  </div>\r
\r
  <div class="footer">\r
    <div class="footer-content">\r
      <div class="contact-wu">\r
\r
        <img style="display: block; width: 160px; height: 47px;" src="/assets/Katauro.svg" alt="Katauro Logo" />\r
\r
        <img style="margin-top: 12px;" src="/assets/Ideas_con_luz.svg" alt="Ideas_con_luz">\r
\r
        <header class="contact-header">\r
          \xA1Comun\xEDcate con nosotros!\r
        </header>\r
        <p class="contact-text">\r
          Env\xEDanos sus comentarios, preguntas o inquietudes. Estaremos encantados de atenderle y ponernos en contacto\r
          con usted.\r
        </p>\r
        <div class="contact-info">\r
          <input style="width: 100%;" class="input-base" type="text" placeholder="Escr\xEDbenos un mensaje">\r
          <button style="height: 44px; width: 88px;;" class="button-base contact-button">\r
            <label>Enviar</label>\r
          </button>\r
        </div>\r
\r
\r
      </div>\r
      <div class="shop-info">\r
        <img style="position:absolute; top: 0; left: 0;" src="/assets/map-pin.svg" alt="Map-pin">\r
        <header style="margin: 0;" class="shop-header">\r
          Tienda\r
        </header>\r
        <p style="margin-top: 8px;" class="footer-text-green shop-text">\r
          Mira nuestros productos disponibles.\r
        </p>\r
\r
        <p style="margin-top: 20;" class="footer-text-black">\r
          100 Smith Street Collingwood VIC 3066 AU\r
        </p>\r
\r
        <img style="position: absolute; left: 0px; margin-top: 25px;" src="/assets/phone.svg" alt="Phone">\r
\r
        <header style="margin-top: 40px;" class="shop-header">\r
          Tel\xE9fono\r
        </header>\r
        <p style="margin-top: 8px;" class="footer-text-green shop-text">\r
          Lunes-Viernes de 8 am a 5 pm.\r
        </p>\r
        <p style="margin-top: 20px;" class="footer-text-black">\r
          +1 (555) 000-0000\r
        </p>\r
\r
      </div>\r
      <div class="factory-info">\r
        <img style="position: absolute; top: 0; left: 0;" src="/assets/map-pin.svg" alt="map-pin">\r
        <header style="margin: 0;" class="factory-header">\r
          F\xE1brica\r
        </header>\r
\r
        <p style="margin-top: 8px;" class="footer-text-green factory-text">\r
          Conoce m\xE1s sobre nuestro proceso de producci\xF3n.\r
        </p>\r
\r
        <p style="margin-top: 20px;" class="footer-text-black">\r
          100 Smith Street Collingwood VIC 3066 AU\r
        </p>\r
\r
        <img style="position: absolute; left: 0; margin-top: 27px;" src="/assets/mail.svg" alt="mail">\r
        <header style="margin-top: 40px;" class="factory-header">Gmail</header>\r
        <p style="margin-top: 8px;" class="footer-text-green factory-text">\r
          Escr\xEDbenos tus dudas e inquietudes.\r
        </p>\r
        <p style="margin-top: 20px;" class="footer-text-black">\r
          hi&#64;untitledui.com\r
        </p>\r
      </div>\r
\r
      <div class="social-media">\r
        <div class="divider"></div>\r
        <img src="/assets/instagram.svg" alt="Instagram">\r
        <img src="/assets/facebook.svg" alt="Facebook">\r
        <img src="/assets/whatsapp.svg" alt="WhatsApp">\r
\r
        <a style="text-decoration: none;" href="https://wa.me/1234567890" target="_blank">\r
          <label style="position: unset; left: auto;" class="footer-links cookies">\r
            Cookies\r
          </label>\r
        </a>\r
\r
        <a style="text-decoration: none;" href="https://wa.me/1234567890" target="_blank">\r
          <label style="position: unset; left: auto;" class="footer-links privacy">\r
            Privacy\r
          </label>\r
        </a>\r
\r
        <a style="text-decoration: none;" href="https://wa.me/1234567890" target="_blank">\r
          <label style="position: unset; left: auto;" class="footer-links terms">\r
            Terms\r
          </label>\r
        </a>\r
\r
        <label class="footer-links copyright">\r
          \xA9 2025 Katauro. Todos los derechos reservados.\r
        </label>\r
\r
\r
      </div>\r
\r
    </div>\r
    <img class="artboard" src="/assets/Artboard_11.svg" alt="Artboard_11">\r
  </div>\r
\r
</div>`;
  }
});

// angular:jit:style:src\app\features\dashboard\dashboard.css
var dashboard_default2;
var init_dashboard2 = __esm({
  "angular:jit:style:src\\app\\features\\dashboard\\dashboard.css"() {
    dashboard_default2 = "/* src/app/features/dashboard/dashboard.css */\n.navigation-bar {\n  display: flex;\n  width: 100%;\n  height: 80px;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  border-bottom: 1px solid var(--Gray-100, #F5F5F5);\n  background: var(--Gray-50, #FAFAFA);\n  gap: 20px;\n  padding-inline: 113px;\n  padding-block: 20px;\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  z-index: 1000;\n}\n.nav-links {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 20px;\n  color: var(--Gray-600, #535862);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n  font-family: var(--montser-font);\n}\n.nav-links a {\n  text-decoration: none;\n  color: inherit;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n.nav-links a.active {\n  color: #007981;\n}\n.nav-links a.active {\n  color: #007981;\n}\n.nav-links a.active {\n  color: #007981;\n}\n.nav-links a.active {\n  color: #007981;\n}\n.Katauro-logo {\n  margin-right: 12px;\n}\n.button-base.login {\n  padding: 10px 18px;\n}\n.footer {\n  width: 100%;\n  display: grid;\n  height: 563px;\n  background: var(--Gray-200, #E9EAEB);\n  overflow: hidden;\n  position: relative;\n}\n.footer-content {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: minmax(350px, 392px) minmax(0, 120px) minmax(324px, auto) minmax(0, 57px) minmax(324px, auto);\n  grid-template-rows: 330px auto;\n  padding-inline: 80px;\n  padding-block: 66px 46px;\n  box-sizing: border-box;\n  z-index: 1;\n}\n.contact-wu {\n  gap: 20px;\n  grid-column: 1;\n  grid-row: 1;\n}\n.shop-info {\n  grid-column: 3;\n  grid-row: 1;\n  box-sizing: border-box;\n  padding-left: 40px;\n  position: relative;\n}\n.footer-content header {\n  color: var(--Gray-900, #181D27);\n  font-family: Montserrat;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 32px;\n  margin-top: 24px;\n}\n.contact-text {\n  color: var(--Gray-900, #181D27);\n  font-family: var(--montser-font);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  max-width: 392px;\n}\n.contact-info {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  align-self: stretch;\n  height: 44px;\n  width: 100%;\n}\n.footer-text-green {\n  color: var(--Brand-600, #178C94);\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n}\n.footer-text-black {\n  color: var(--Black, #000);\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n}\n.factory-info {\n  grid-column: 5;\n  grid-row: 1;\n  position: relative;\n  padding-left: 40px;\n  box-sizing: border-box;\n}\n.social-media {\n  grid-row: 2;\n  grid-column: 1/7;\n  position: relative;\n  margin-top: 64px;\n  padding-top: 32px;\n  display: flex;\n  flex-direction: row-reverse;\n  gap: 24px;\n}\n.divider {\n  height: 1px;\n  align-self: stretch;\n  width: 100%;\n  background: var(--Gray-25, #FDFDFD);\n  position: absolute;\n  top: 0;\n}\n.footer-links {\n  color: var(--Gray-500, #717680);\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n  position: absolute;\n  left: 0px;\n}\n.artboard {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=dashboard.css.map */\n";
  }
});

// src/app/features/dashboard/dashboard.ts
var Dashboard;
var init_dashboard3 = __esm({
  "src/app/features/dashboard/dashboard.ts"() {
    "use strict";
    init_tslib_es6();
    init_dashboard();
    init_dashboard2();
    init_common();
    init_core();
    init_router();
    Dashboard = class Dashboard2 {
      router;
      constructor(router) {
        this.router = router;
      }
      isActive(route) {
        const currentUrl = window.location.pathname;
        return currentUrl.includes(route);
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    Dashboard = __decorate([
      Component({
        selector: "app-dashboard",
        imports: [RouterOutlet, CommonModule],
        template: dashboard_default,
        styles: [dashboard_default2]
      })
    ], Dashboard);
  }
});

// src/app/features/dashboard/dashboard.spec.ts
var require_dashboard_spec = __commonJS({
  "src/app/features/dashboard/dashboard.spec.ts"(exports) {
    init_testing();
    init_dashboard3();
    describe("Dashboard", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Dashboard]
        }).compileComponents();
        fixture = TestBed.createComponent(Dashboard);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_dashboard_spec();
//# sourceMappingURL=spec-dashboard.spec.js.map
