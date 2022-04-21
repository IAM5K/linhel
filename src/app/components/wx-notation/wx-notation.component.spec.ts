import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WxNotationComponent } from './wx-notation.component';

describe('WxNotationComponent', () => {
  let component: WxNotationComponent;
  let fixture: ComponentFixture<WxNotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WxNotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WxNotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
