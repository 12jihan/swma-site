import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundzComponent } from './roundz.component';

describe('RoundzComponent', () => {
  let component: RoundzComponent;
  let fixture: ComponentFixture<RoundzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
