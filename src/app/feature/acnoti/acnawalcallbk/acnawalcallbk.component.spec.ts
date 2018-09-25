import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcnawalcallbkComponent } from './acnawalcallbk.component';

describe('AcnawalcallbkComponent', () => {
  let component: AcnawalcallbkComponent;
  let fixture: ComponentFixture<AcnawalcallbkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcnawalcallbkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcnawalcallbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
