import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaruhiComponent } from './haruhi.component';

describe('HaruhiComponent', () => {
  let component: HaruhiComponent;
  let fixture: ComponentFixture<HaruhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaruhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaruhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
