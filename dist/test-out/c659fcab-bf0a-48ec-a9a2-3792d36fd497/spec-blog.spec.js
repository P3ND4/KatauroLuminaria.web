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

// angular:jit:template:src\app\features\dashboard\blog\blog.html
var blog_default;
var init_blog = __esm({
  "angular:jit:template:src\\app\\features\\dashboard\\blog\\blog.html"() {
    blog_default = "<p>blog works!</p>\r\n";
  }
});

// angular:jit:style:src\app\features\dashboard\blog\blog.css
var blog_default2;
var init_blog2 = __esm({
  "angular:jit:style:src\\app\\features\\dashboard\\blog\\blog.css"() {
    blog_default2 = "/* src/app/features/dashboard/blog/blog.css */\n/*# sourceMappingURL=blog.css.map */\n";
  }
});

// src/app/features/dashboard/blog/blog.ts
var Blog;
var init_blog3 = __esm({
  "src/app/features/dashboard/blog/blog.ts"() {
    "use strict";
    init_tslib_es6();
    init_blog();
    init_blog2();
    init_core();
    Blog = class Blog2 {
    };
    Blog = __decorate([
      Component({
        selector: "app-blog",
        imports: [],
        template: blog_default,
        styles: [blog_default2]
      })
    ], Blog);
  }
});

// src/app/features/dashboard/blog/blog.spec.ts
var require_blog_spec = __commonJS({
  "src/app/features/dashboard/blog/blog.spec.ts"(exports) {
    init_testing();
    init_blog3();
    describe("Blog", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Blog]
        }).compileComponents();
        fixture = TestBed.createComponent(Blog);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_blog_spec();
//# sourceMappingURL=spec-blog.spec.js.map
