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

// angular:jit:template:src\app\features\dashboard\team\team.html
var team_default;
var init_team = __esm({
  "angular:jit:template:src\\app\\features\\dashboard\\team\\team.html"() {
    team_default = '<div class="our-team">\r\n    <header class="main-h">\r\n        <h1>\r\n            Ellos hacen la magia\r\n        </h1>\r\n        <p style="width: 700px;">\r\n            En Katauro somos una familia, este es el equipo encargado del dise\xF1o y producci\xF3n de nuestras luminarias.\r\n        </p>\r\n    </header>\r\n\r\n    <div class="team-members">\r\n        <div  class="img-cont">\r\n            <img style="width: 100%; height: 100%;" src="/assets/team.png"/>\r\n        </div>\r\n        <div class="team-list">\r\n            <div *ngFor="let member of team" class="member">\r\n                <img style="width: 100%; height: 217px;" src="{{member.img}}" alt="{{member.name}}">\r\n                <div>\r\n                    <h3>Olivia Rhye</h3>\r\n                    <h4>Fundador y directivo</h4>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>';
  }
});

// angular:jit:style:src\app\features\dashboard\team\team.css
var team_default2;
var init_team2 = __esm({
  "angular:jit:style:src\\app\\features\\dashboard\\team\\team.css"() {
    team_default2 = "/* src/app/features/dashboard/team/team.css */\n.our-team {\n  display: flex;\n  flex-direction: column;\n  gap: 96px;\n}\n.main-h {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 96px;\n  margin-bottom: 40px;\n}\nh1 {\n  color: var(--Brand-900, #175659);\n  text-align: center;\n  font-family: var(--montser-font);\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 60px;\n  letter-spacing: -0.96px;\n  margin: 0px;\n}\n.main-h p {\n  color: var(--Brand-700, #007981);\n  text-align: center;\n  font-family: var(--montser-font);\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 30px;\n  margin: 0px;\n}\n.team-list {\n  padding-top: 64px;\n  padding-inline: 80px;\n  row-gap: 64px;\n  column-gap: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 96px;\n}\n.img-cont {\n  width: 100%;\n  height: 560px;\n  display: flex;\n  position: relative;\n}\n.member {\n  display: flex;\n  flex-direction: column;\n  height: 380px;\n  width: 218px;\n  gap: 24px;\n  overflow: hidden;\n  border-radius: 4px;\n}\nh3 {\n  color: var(--Gray-900, #181D27);\n  font-family: var(--montser-font);\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 30px;\n  margin: 0px;\n}\nh4 {\n  color: var(--Brand-700, #007981);\n  font-family: var(--montser-font);\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n  margin: 0px;\n}\n.member p {\n  color: var(--Gray-600, #535862);\n  font-family: var(--montser-font);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  margin-top: 16px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=team.css.map */\n";
  }
});

// src/app/features/dashboard/team/team.ts
var Team;
var init_team3 = __esm({
  "src/app/features/dashboard/team/team.ts"() {
    "use strict";
    init_tslib_es6();
    init_team();
    init_team2();
    init_core();
    init_common();
    Team = class Team2 {
      team = [];
      constructor() {
        for (let index = 0; index < 15; index++) {
          this.team.push({
            img: "/assets/Image.png",
            name: "Olivia Rhye",
            charge: "Fundador y directivo",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          });
        }
      }
      static ctorParameters = () => [];
    };
    Team = __decorate([
      Component({
        selector: "app-team",
        imports: [CommonModule],
        template: team_default,
        styles: [team_default2]
      })
    ], Team);
  }
});

// src/app/features/dashboard/team/team.spec.ts
var require_team_spec = __commonJS({
  "src/app/features/dashboard/team/team.spec.ts"(exports) {
    init_testing();
    init_team3();
    describe("Team", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Team]
        }).compileComponents();
        fixture = TestBed.createComponent(Team);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_team_spec();
//# sourceMappingURL=spec-team.spec.js.map
