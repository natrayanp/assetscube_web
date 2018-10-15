import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcnoticompComponent } from './acnoticomp.component';

describe('AcnoticompComponent', () => {
  let component: AcnoticompComponent;
  let fixture: ComponentFixture<AcnoticompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcnoticompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcnoticompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
