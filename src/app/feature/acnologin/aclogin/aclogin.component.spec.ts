import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcloginComponent } from './aclogin.component';

describe('AcloginComponent', () => {
  let component: AcloginComponent;
  let fixture: ComponentFixture<AcloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
