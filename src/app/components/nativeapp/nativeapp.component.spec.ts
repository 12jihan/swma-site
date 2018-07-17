import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeappComponent } from './nativeapp.component';

describe('NativeappComponent', () => {
  let component: NativeappComponent;
  let fixture: ComponentFixture<NativeappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
