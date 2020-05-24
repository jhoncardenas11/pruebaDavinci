import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetsAtHomeComponent } from './meets-at-home.component';

describe('MeetsAtHomeComponent', () => {
  let component: MeetsAtHomeComponent;
  let fixture: ComponentFixture<MeetsAtHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetsAtHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetsAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
