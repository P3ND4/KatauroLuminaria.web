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

// angular:jit:template:src\app\features\dashboard\galery\galery.html
var galery_default;
var init_galery = __esm({
  "angular:jit:template:src\\app\\features\\dashboard\\galery\\galery.html"() {
    galery_default = "<p>galery works!</p>\r\n";
  }
});

// angular:jit:style:src\app\features\dashboard\galery\galery.css
var galery_default2;
var init_galery2 = __esm({
  "angular:jit:style:src\\app\\features\\dashboard\\galery\\galery.css"() {
    galery_default2 = "/* src/app/features/dashboard/galery/galery.css */\n/*# sourceMappingURL=galery.css.map */\n";
  }
});

// src/app/features/dashboard/galery/galery.ts
var Galery;
var init_galery3 = __esm({
  "src/app/features/dashboard/galery/galery.ts"() {
    "use strict";
    init_tslib_es6();
    init_galery();
    init_galery2();
    init_core();
    Galery = class Galery2 {
    };
    Galery = __decorate([
      Component({
        selector: "app-galery",
        imports: [],
        template: galery_default,
        styles: [galery_default2]
      })
    ], Galery);
  }
});

// src/app/features/dashboard/galery/galery.spec.ts
var require_galery_spec = __commonJS({
  "src/app/features/dashboard/galery/galery.spec.ts"(exports) {
    init_testing();
    init_galery3();
    describe("Galery", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Galery]
        }).compileComponents();
        fixture = TestBed.createComponent(Galery);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_galery_spec();
//# sourceMappingURL=spec-galery.spec.js.map
