import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prodct } from './prodct';

describe('Prodct', () => {
  let component: Prodct;
  let fixture: ComponentFixture<Prodct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prodct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prodct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
