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
import { StarFilterComponent } from './star-filter/star-filter.component';
import { HotelsFilterPipe } from './pipes/hotels-filter.pipe';
import { FavoriteHotelsComponent } from './favorite-hotels/favorite-hotels.component';
import { OrdinalHighlightDirective } from './directives/ordinal-highlight.directive';
import { LoaderDirective } from './directives/loader.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MaterialModule } from './../shared/material/material.module';

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
    StarFilterComponent,
    HotelsFilterPipe,
    FavoriteHotelsComponent,
    OrdinalHighlightDirective,
    LoaderDirective,
    LoadingSpinnerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ HotelsComponent ]
})
export class HotelsListModule { }
