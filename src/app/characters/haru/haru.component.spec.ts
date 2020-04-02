import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaruComponent } from './haru.component';

describe('HaruComponent', () => {
  let component: HaruComponent;
  let fixture: ComponentFixture<HaruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
