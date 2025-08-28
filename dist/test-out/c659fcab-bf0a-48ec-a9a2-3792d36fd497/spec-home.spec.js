import {
  Corousel,
  init_corousel
} from "./chunk-TKXOBDUH.js";
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

// angular:jit:template:src\app\features\dashboard\home\home.html
var home_default;
var init_home = __esm({
  "angular:jit:template:src\\app\\features\\dashboard\\home\\home.html"() {
    home_default = '<app-corousel [data]="carousel1" />\r\n<div class="home-container">\r\n\r\n    <div class="luminarias">\r\n        <header style="gap: 20px; display: block;">\r\n            <h2>Conoce nuestras luminarias disponibles</h2>\r\n            <p class="header-p">Aqu\xED podr\xE1s encontrar nuestras l\xE1mparas de techo, mesa, pared y piso disponibles.\r\n            </p>\r\n        </header>\r\n        <ul class="luminarias-list">\r\n            <li>\r\n                <img src="/assets/mesa.png" alt="L\xE1mpara de mesa">\r\n            </li>\r\n            <li>\r\n                <img src="/assets/pared.png" alt="L\xE1mpara de pared">\r\n            </li>\r\n            <li>\r\n                <img src="/assets/pie.png" alt="L\xE1mpara de piso">\r\n            </li>\r\n            <li>\r\n                <img src="/assets/techo.png" alt="L\xE1mpara de techo">\r\n            </li>\r\n        </ul>\r\n\r\n    </div>\r\n\r\n    <app-corousel [data]="carousel2" />\r\n\r\n    <div class="offers-grid">\r\n        <div *ngFor="let i of [0,1,2,3,4,5,6]">\r\n            <img src="{{mostRated[i]}}" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class="luminarias featured">\r\n        <header style="gap: 20px; display: block;">\r\n            <h2>Luminarias destacadas</h2>\r\n            <p class="header-p">Aprecia nuestras l\xE1mparas de dise\xF1o propio m\xE1s relevantes.</p>\r\n        </header>\r\n        <div class="featured-content">\r\n            <div>\r\n                <img src="/assets/featured1.png" alt="">\r\n            </div>\r\n            <div>\r\n                <img src="/assets/featured2.png" alt="">\r\n            </div>\r\n            <div>\r\n                <img src="/assets/featured2.png" alt="">\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n<app-corousel [data]="carousel2" />\r\n\r\n<div style="display: flex; justify-content: center; flex-direction: column; padding-inline: 80px; padding-bottom: 96px; box-sizing: border-box;">\r\n    <div class="recent-posts">\r\n        <header>\r\n            <h2 style="font-size: 36px; text-align: left;">Publicaciones recientes</h2>\r\n        </header>\r\n        <div class="post-container">\r\n            <div>\r\n                <img src="/assets/Image.png" alt="">\r\n                <div class="info-post">\r\n                    <h4>19 Ene 2025</h4>\r\n                    <h3>Nombre Atractivo</h3>\r\n                    <p>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis\r\n                        risus.</p>\r\n\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <img src="/assets/Image.png" alt="">\r\n                <div class="info-post">\r\n                    <h4>19 Ene 2025</h4>\r\n                    <h3>Nombre Atractivo</h3>\r\n                    <p>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis\r\n                        risus.</p>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <img src="/assets/Image.png" alt="">\r\n                <div class="info-post">\r\n                    <h4>19 Ene 2025</h4>\r\n                    <h3>Nombre Atractivo</h3>\r\n                    <p>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis\r\n                        risus.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>';
  }
});

// angular:jit:style:src\app\features\dashboard\home\home.css
var home_default2;
var init_home2 = __esm({
  "angular:jit:style:src\\app\\features\\dashboard\\home\\home.css"() {
    home_default2 = "/* src/app/features/dashboard/home/home.css */\n.home-container {\n  display: flex;\n  flex-direction: column;\n  gap: 120px;\n  padding-inline: 80px;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin-bottom: 96px;\n  margin-top: 120px;\n}\nh2 {\n  color: var(--Brand-900, #175659);\n  text-align: center;\n  font-family: var(--montser-font);\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 60px;\n  margin: 0px;\n  letter-spacing: -0.96px;\n}\n.header-p {\n  color: var(--Brand-700, #007981);\n  text-align: center;\n  font-family: var(--montser-font);\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 30px;\n}\n.luminarias-list {\n  display: flex;\n  flex-direction: row;\n  gap: 24px;\n  scroll-behavior: unset;\n  list-style-type: none;\n  margin-top: 64px;\n  padding: 0px;\n  justify-content: space-between;\n  overflow-x: auto;\n}\n.luminarias-list::-webkit-scrollbar {\n  display: none;\n}\n.luminarias-list li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 302px;\n  height: 440px;\n  cursor: pointer;\n  border-radius: 8px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.luminarias-list li img {\n  width: 110%;\n  height: 110%;\n  transition: width 0.5s ease, height 0.5s ease;\n}\n.luminarias-list li img:hover {\n  width: 100%;\n  height: 100%;\n}\n.offers-grid {\n  display: grid;\n  grid-template-columns: 434px minmax(24px, auto) 256px minmax(24px, auto) 256px minmax(24px, auto) 256px;\n  grid-template-rows: 312px 312px;\n  row-gap: 24px;\n  overflow: hidden;\n}\n.offers-grid div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  position: relative;\n}\n.offers-grid div img {\n  position: absolute;\n  top: -5%;\n  left: -5%;\n  width: 110%;\n  height: 110%;\n  transition:\n    width 0.5s ease,\n    height 0.5s ease,\n    top 0.5s ease,\n    left 0.5s ease;\n}\n.offers-grid div:nth-child(1) {\n  grid-column: 1;\n  grid-row: 1/3;\n}\n.offers-grid div:nth-child(1) img:hover {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  top: 0px;\n  left: 0px;\n}\n.offers-grid div:nth-child(2) {\n  grid-row: 1;\n  grid-column: 3;\n}\n.offers-grid div:nth-child(2) img:hover {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  top: 0px;\n  left: 0px;\n}\n.offers-grid div:nth-child(3) {\n  grid-row: 1;\n  grid-column: 5;\n}\n.offers-grid div:nth-child(3) img:hover {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  top: 0px;\n  left: 0px;\n}\n.offers-grid div:nth-child(4) {\n  grid-row: 1;\n  grid-column: 7;\n}\n.offers-grid div:nth-child(4) img:hover {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  top: 0px;\n  left: 0px;\n}\n.offers-grid div:nth-child(5) {\n  grid-row: 2;\n  grid-column: 3;\n}\n.offers-grid div:nth-child(5) img:hover {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  top: 0px;\n  left: 0px;\n}\n.offers-grid div:nth-child(6) {\n  grid-row: 2;\n  grid-column: 5;\n}\n.offers-grid div:nth-child(6) img:hover {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  top: 0px;\n  left: 0px;\n}\n.offers-grid div:nth-child(7) {\n  grid-row: 2;\n  grid-column: 7;\n}\n.offers-grid div:nth-child(7) img:hover {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  top: 0px;\n  left: 0px;\n}\n.luminarias.featured {\n  display: flex;\n  flex-direction: column;\n  gap: 64px;\n  align-items: center;\n}\n.featured-content {\n  display: grid;\n  grid-template-columns: 608px 608px;\n  grid-template-rows: 307px 307px;\n  gap: 24px;\n  overflow: hidden;\n}\n.featured-content div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.featured-content div img {\n  width: 105%;\n  height: 105%;\n  transition: width 0.5s ease, height 0.5s ease;\n}\n.featured-content :nth-child(1) {\n  grid-row: 1/3;\n  grid-column: 1;\n}\n.featured-content :nth-child(2) {\n  grid-row: 1;\n  grid-column: 2;\n}\n.featured-content :nth-child(3) {\n  grid-row: 2;\n  grid-column: 2;\n}\n.featured-content div img:hover {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.recent-posts {\n  width: 100%;\n  overflow: hidden;\n  margin-top: 120px;\n}\n.post-container {\n  display: grid;\n  gap: 32px;\n  grid-template-columns: 624px 624px;\n  grid-template-rows: 253px 253px;\n}\n.post-container div {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  gap: 24px;\n  cursor: pointer;\n}\n.post-container :nth-child(1) {\n  grid-column: 1;\n  grid-row: 1/3;\n  flex-direction: column;\n  gap: 32px;\n}\n.post-container :nth-child(1) img {\n  width: 100%;\n  height: 335px;\n}\n.post-container :nth-child(2) {\n  display: flex;\n  grid-column: 2;\n  grid-row: 1;\n}\n.post-container :nth-child(2) img,\n.post-container :nth-child(3) img {\n  width: 320px;\n  height: 100%;\n}\n.post-container :nth-child(3) {\n  display: flex;\n  grid-column: 2;\n  grid-row: 2;\n}\n.info-post {\n  display: flex;\n  flex-direction: column;\n}\n.recent-posts h3 {\n  color: var(--Gray-900, #181D27);\n  font-family: var(--montser-font);\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  margin: 0px;\n}\n.recent-posts h4 {\n  color: var(--Brand-700, #007981);\n  font-family: var(--montser-font);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n  margin: 0px;\n}\n.recent-posts p {\n  overflow: hidden;\n  color: var(--Gray-600, #535862);\n  text-overflow: ellipsis;\n  font-family: var(--montser-font);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n}\n@media screen and (min-width: 1160px) and (max-width: 1450px) {\n  .offers-grid {\n    grid-template-columns: 434px minmax(24px, auto) 256px minmax(24px, auto) 256px minmax(24px, auto) 256px;\n    grid-template-rows: 312px 312px;\n  }\n  .post-container {\n    display: grid;\n    gap: 32px;\n    grid-template-columns: 400px 550px;\n    grid-template-rows: 200px 200px;\n  }\n  .home-container {\n    padding-inline: 60px;\n  }\n  .featured-content {\n    display: grid;\n    grid-template-columns: 500px 500px;\n    grid-template-rows: 270px 270px;\n    gap: 24px;\n    overflow: hidden;\n  }\n}\n@media screen and (max-width: 1160px) {\n  .home-container {\n    padding-inline: 30px;\n  }\n  .post-container {\n    display: grid;\n    gap: 32px;\n    grid-template-columns: 550px;\n    grid-template-rows: 550px 550px 550px;\n  }\n  .post-container :nth-child(1) {\n    grid-column: 1;\n    grid-row: 1;\n    flex-direction: column;\n    gap: 32px;\n  }\n  .post-container :nth-child(1) img {\n    width: 100%;\n    height: 300px;\n  }\n  .post-container :nth-child(2) {\n    display: flex;\n    flex-direction: column;\n    grid-column: 1;\n    grid-row: 2;\n  }\n  .post-container :nth-child(2) img,\n  .post-container :nth-child(3) img {\n    width: 100%;\n    height: 400px;\n  }\n  .post-container :nth-child(3) {\n    display: flex;\n    flex-direction: column;\n    grid-column: 1;\n    grid-row: 3;\n  }\n  .featured-content {\n    display: grid;\n    grid-template-columns: 608px;\n    grid-template-rows: 600px 600px 600px;\n    gap: 24px;\n  }\n  .featured-content :nth-child(1) {\n    grid-row: 1;\n    grid-column: 1;\n  }\n  .featured-content :nth-child(2) {\n    grid-row: 2;\n    grid-column: 1;\n  }\n  .featured-content :nth-child(3) {\n    grid-row: 3;\n    grid-column: 1;\n  }\n}\n/*# sourceMappingURL=home.css.map */\n";
  }
});

// src/app/features/dashboard/home/home.ts
var Home;
var init_home3 = __esm({
  "src/app/features/dashboard/home/home.ts"() {
    "use strict";
    init_tslib_es6();
    init_home();
    init_home2();
    init_core();
    init_corousel();
    init_common();
    Home = class Home2 {
      carousel1 = {
        carousel: 0,
        title: "T\xEDtulo atractivo en 2 l\xEDneas de texto",
        description: "Descripci\xF3n corta del evento o producto que se este promocionando.",
        images: [
          "/assets/Carousel_image.png",
          "/assets/Carousel_image2.png",
          "/assets/Carousel_image.png"
        ]
      };
      carousel2 = {
        carousel: 1,
        title: "T\xEDtulo atractivo en 2 l\xEDneas de texto",
        description: "Descripci\xF3n corta del evento o producto que se este promocionando.",
        images: [
          "/assets/Carousel_image.png",
          "/assets/Carousel_image2.png",
          "/assets/Carousel_image.png"
        ]
      };
      mostRated = [
        "/assets/lampara.png",
        "/assets/lampara.png",
        "/assets/lampara.png",
        "/assets/lampara.png",
        "/assets/lampara.png",
        "/assets/lampara.png",
        "/assets/lampara.png"
      ];
    };
    Home = __decorate([
      Component({
        selector: "app-home",
        imports: [Corousel, CommonModule],
        template: home_default,
        styles: [home_default2]
      })
    ], Home);
  }
});

// src/app/features/dashboard/home/home.spec.ts
var require_home_spec = __commonJS({
  "src/app/features/dashboard/home/home.spec.ts"(exports) {
    init_testing();
    init_home3();
    describe("Home", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Home]
        }).compileComponents();
        fixture = TestBed.createComponent(Home);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-home.spec.js.map
