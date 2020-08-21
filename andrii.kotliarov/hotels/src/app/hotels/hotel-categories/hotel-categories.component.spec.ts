import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCategoriesComponent } from './hotel-categories.component';

describe('HotelCategoriesComponent', () => {
  let component: HotelCategoriesComponent;
  let fixture: ComponentFixture<HotelCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
