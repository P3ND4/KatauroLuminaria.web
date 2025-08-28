import {
  CommonModule,
  init_common
} from "./chunk-YD3INBKK.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-EQYVKW6I.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\shared\components\corousel\corousel.html
var corousel_default;
var init_corousel = __esm({
  "angular:jit:template:src\\app\\shared\\components\\corousel\\corousel.html"() {
    corousel_default = `<div class="carousel-container" [ngClass]="{'second': carouselType == 1, 'third': carouselType == 2 }">\r
    <div class="slides">\r
        <div class="slide" *ngFor="let img of images; let i = index" [ngClass]="{ 'visible': currentSlide === i }">\r
            <img src="{{img}}" />\r
        </div>\r
        <div class="info-contet" [ngClass]="{'second': carouselType == 1, 'third': carouselType == 2 }">\r
            <h2 class="car-text" >{{data?.title}}</h2>\r
            <p class="card-info">{{data?.description}}</p>\r
            <button class="button-chips">\r
                <label>Adquirir</label>\r
            </button>\r
        </div>\r
    </div>\r
\r
    <div class="navegacion">\r
        <label [ngStyle]="{'background-color': currentSlide === i ? '#fff' : '#717680'}" *ngFor="let img of images; let i = index" (click)="goToSlide(i)">\r
        </label>\r
    </div>\r
</div>`;
  }
});

// angular:jit:style:src\app\shared\components\corousel\corousel.css
var corousel_default2;
var init_corousel2 = __esm({
  "angular:jit:style:src\\app\\shared\\components\\corousel\\corousel.css"() {
    corousel_default2 = "/* src/app/shared/components/corousel/corousel.css */\n.carousel-container {\n  position: relative;\n  height: 560px;\n}\n.carousel-container.second {\n  height: 486px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.carousel-container input[type=radio] {\n  display: none;\n}\n.slide {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 1s ease-in-out;\n}\n.slide img {\n  width: 100%;\n  height: 100%;\n}\n.slide.visible {\n  opacity: 1;\n  z-index: 1;\n}\n.navegacion {\n  display: flex;\n  position: absolute;\n  z-index: 10;\n  gap: 12px;\n  bottom: 16px;\n  left: calc(50% - 24px);\n}\n.info-contet {\n  position: absolute;\n  z-index: 2;\n  top: 116px;\n  left: 145px;\n  display: flex;\n  width: 610px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 32px;\n}\n.info-contet.second {\n  left: auto;\n  right: 145px;\n  top: 85.5px;\n  align-items: flex-end;\n}\n.info-contet.second h2,\n.info-contet.second p {\n  text-align: right;\n}\n.info-contet h2 {\n  color: var(--White, #FFF);\n  font-family: Montserrat;\n  font-size: 60px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 72px;\n  letter-spacing: -1.2px;\n  margin: 0px;\n}\n.info-contet p {\n  color: var(--White, #FFF);\n  font-family: Montserrat;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 30px;\n  margin: 0px;\n}\n.navegacion label {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #717680;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n.navegacion label:hover {\n  background-color: #bdc0c6 !important;\n}\n/*# sourceMappingURL=corousel.css.map */\n";
  }
});

// src/app/shared/components/corousel/corousel.ts
var Corousel;
var init_corousel3 = __esm({
  "src/app/shared/components/corousel/corousel.ts"() {
    "use strict";
    init_tslib_es6();
    init_corousel();
    init_corousel2();
    init_common();
    init_core();
    Corousel = class Corousel2 {
      data;
      carouselType;
      currentSlide = 0;
      images = [
        "/assets/Carousel_image.png",
        "/assets/Carousel_image2.png",
        "/assets/Carousel_image.png"
      ];
      autoSlideInterval;
      ngOnDestroy() {
        clearInterval(this.autoSlideInterval);
      }
      ngOnInit() {
        if (this.data) {
          this.images = this.data.images;
        }
        this.carouselType = this.data?.carousel;
        this.startAutoplay();
      }
      startAutoplay() {
        this.autoSlideInterval = setInterval(() => this.nextSlide(), 4e3);
      }
      goToSlide(index) {
        this.currentSlide = index;
        clearInterval(this.autoSlideInterval);
        setTimeout(() => this.startAutoplay(), 1e4);
      }
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.images.length;
      }
      static propDecorators = {
        data: [{ type: Input }]
      };
    };
    Corousel = __decorate([
      Component({
        selector: "app-corousel",
        imports: [CommonModule],
        template: corousel_default,
        styles: [corousel_default2]
      })
    ], Corousel);
  }
});

export {
  Corousel,
  init_corousel3 as init_corousel
};
//# sourceMappingURL=chunk-TKXOBDUH.js.map
