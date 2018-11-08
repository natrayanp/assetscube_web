import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcloginchkComponent } from './acloginchk.component';

describe('AcloginchkComponent', () => {
  let component: AcloginchkComponent;
  let fixture: ComponentFixture<AcloginchkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcloginchkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcloginchkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
