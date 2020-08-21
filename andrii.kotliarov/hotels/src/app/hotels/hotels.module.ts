import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelComponent } from './hotel/hotel.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { HotelsComponent } from './hotels.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { HotelCategoriesComponent } from './hotel-categories/hotel-categories.component';
import { HotelsFilterComponent } from './hotels-filter/hotels-filter.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TitleDescriptionFilterPipe } from './title-description-filter.pipe';


@NgModule({
  declarations: [
    HotelsListComponent,
    HotelComponent,
    WeatherComponent,
    ProfileComponent,
    HotelsComponent,
    HotelInfoComponent,
    HotelCategoriesComponent,
    HotelsFilterComponent,
    TitleDescriptionFilterPipe],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule
  ],
  exports:[ HotelsComponent ]
})
export class HotelsListModule { }
