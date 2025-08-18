import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singular } from './singular';

describe('Singular', () => {
  let component: Singular;
  let fixture: ComponentFixture<Singular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
