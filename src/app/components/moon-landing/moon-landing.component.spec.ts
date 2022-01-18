import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonLandingComponent } from './moon-landing.component';

describe('MoonLandingComponent', () => {
  let component: MoonLandingComponent;
  let fixture: ComponentFixture<MoonLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
