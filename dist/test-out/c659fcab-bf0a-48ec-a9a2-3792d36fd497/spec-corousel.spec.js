import {
  Corousel,
  init_corousel
} from "./chunk-TKXOBDUH.js";
import "./chunk-YD3INBKK.js";
import {
  TestBed,
  init_testing
} from "./chunk-EQYVKW6I.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/shared/components/corousel/corousel.spec.ts
var require_corousel_spec = __commonJS({
  "src/app/shared/components/corousel/corousel.spec.ts"(exports) {
    init_testing();
    init_corousel();
    describe("Corousel", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Corousel]
        }).compileComponents();
        fixture = TestBed.createComponent(Corousel);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_corousel_spec();
//# sourceMappingURL=spec-corousel.spec.js.map
