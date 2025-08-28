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

// angular:jit:template:src\app\features\login\login.html
var login_default;
var init_login = __esm({
  "angular:jit:template:src\\app\\features\\login\\login.html"() {
    login_default = "<p>login works!</p>\r\n";
  }
});

// angular:jit:style:src\app\features\login\login.css
var login_default2;
var init_login2 = __esm({
  "angular:jit:style:src\\app\\features\\login\\login.css"() {
    login_default2 = "/* src/app/features/login/login.css */\n/*# sourceMappingURL=login.css.map */\n";
  }
});

// src/app/features/login/login.ts
var Login;
var init_login3 = __esm({
  "src/app/features/login/login.ts"() {
    "use strict";
    init_tslib_es6();
    init_login();
    init_login2();
    init_core();
    Login = class Login2 {
    };
    Login = __decorate([
      Component({
        selector: "app-login",
        imports: [],
        template: login_default,
        styles: [login_default2]
      })
    ], Login);
  }
});

// src/app/features/login/login.spec.ts
var require_login_spec = __commonJS({
  "src/app/features/login/login.spec.ts"(exports) {
    init_testing();
    init_login3();
    describe("Login", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Login]
        }).compileComponents();
        fixture = TestBed.createComponent(Login);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_spec();
//# sourceMappingURL=spec-login.spec.js.map
