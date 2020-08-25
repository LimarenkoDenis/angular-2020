import { Component, OnInit } from '@angular/core';
import { IHotel } from './models/IHotel';
import { ICategory } from './models/ICategory';
import { contentCategories } from './__mock__/categories';
import { FavoriteHotelEventData } from './models/FavoriteHotel';
import { isDefined } from '@angular/compiler/src/util';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public selectedHotel: IHotel;
  public selectedCategory: ICategory<IHotel>;
  public hotelsCategory: ICategory<IHotel>[];
  public favoriteHotels: IHotel[] = [];
  public isLoaded: boolean = false;

  public constructor(private notifier: MatSnackBar) {
    setTimeout(() => {
      this.hotelsCategory = contentCategories;
      this.selectedCategory = this.hotelsCategory[0];
      this.selectedHotel = this.selectedCategory.categoryHotels[0];
      this.isLoaded = true;
    }, 3000);
  }

  public hotelWasSelected(hotelId: number): void {
    this.selectedHotel = this.selectedCategory.categoryHotels.find((hotel: IHotel) => hotel.id === hotelId);
  }

  public categoryWasSelected(categoryName: string): void {
    this.selectedCategory = this.hotelsCategory.find((category: ICategory<IHotel>) =>
            category.categoryName === categoryName);
  }

  public favoriteHotelsChanged(eventData: FavoriteHotelEventData): void {
    if (!eventData || !isDefined(eventData.hotelId) || eventData.hotelId === null) {
      return;
    }

    const hotelModel: IHotel = this.selectedCategory
      .categoryHotels.find((hotel: IHotel) => hotel.id === eventData.hotelId);

    if (!hotelModel) {
      return;
    }

    if (eventData.isAdded) {
      this.favoriteHotels.push(hotelModel);
    } else {
      this.favoriteHotels.splice(this.favoriteHotels.indexOf(hotelModel), 1);
    }

    this.showMessage(`Favorites hotels changed, hotel ${hotelModel.title} was ${eventData.isAdded ? 'added' : 'removed'}`);
  }

  public ngOnInit(): void {
  }

  private showMessage(message: string): void {
    this.notifier.open(message, 'Hide', {
      duration: 3000,
    });
  }
}
