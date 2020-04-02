import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkioComponent } from './akio.component';

describe('AkioComponent', () => {
  let component: AkioComponent;
  let fixture: ComponentFixture<AkioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
