import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhateverappComponent } from './whateverapp.component';

describe('WhateverappComponent', () => {
  let component: WhateverappComponent;
  let fixture: ComponentFixture<WhateverappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhateverappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhateverappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
