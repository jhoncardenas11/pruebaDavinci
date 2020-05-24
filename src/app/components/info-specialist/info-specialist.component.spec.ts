import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSpecialistComponent } from './info-specialist.component';

describe('InfoSpecialistComponent', () => {
  let component: InfoSpecialistComponent;
  let fixture: ComponentFixture<InfoSpecialistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSpecialistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
