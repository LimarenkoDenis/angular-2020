import { Component, OnInit } from '@angular/core';
import { IHotel } from './models/IHotel';
import { ICategory } from './models/ICategory';
import { contentCategories } from './__mock__/categories';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public selectedHotel: IHotel;
  public selectedCategory: ICategory<IHotel>;
  public hotelsCategory: ICategory<IHotel>[];

  public constructor() {
    this.hotelsCategory = contentCategories;
    this.selectedCategory = this.hotelsCategory[0];
    this.selectedHotel = this.selectedCategory.categoryHotels[0];
  }

  public hotelWasSelected(hotelId: number): void {
    this.selectedHotel = this.selectedCategory.categoryHotels.find((hotel: IHotel) => hotel.id === hotelId);
  }

  public categoryWasSelected(categoryName: string): void {
    this.selectedCategory = this.hotelsCategory.find((category: ICategory<IHotel>) =>
            category.categoryName === categoryName);
  }

  public ngOnInit(): void {
  }
}
