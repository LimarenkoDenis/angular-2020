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
import { StarFilterComponent } from './star-filter/star-filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { HotelsFilterPipe } from './pipes/hotels-filter.pipe';
import { FavoriteHotelsComponent } from './favorite-hotels/favorite-hotels.component';
import { OrdinalHighlightDirective } from './directives/ordinal-highlight.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderDirective } from './directives/loader.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RemoteService } from '@app/services/remote.service';

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
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  exports: [ HotelsComponent ]
})
export class HotelsListModule { }
