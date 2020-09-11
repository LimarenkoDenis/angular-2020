import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from '@app/models/IHotel';
import { ICategory } from '@app/models/ICategory';
import { FavoriteHotelEventData } from '@app/models/FavoriteHotel';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  @Input()
  public categories: ICategory<IHotel>[];

  @Input()
  public selectedHotel: IHotel;

  @Input()
  public selectedCategory: ICategory<IHotel>;

  @Input()
  public favoriteHotels: IHotel[];

  @Output()
  public hotelWasSelected: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public categoryWasSelected: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public favoriteHotelsChanged: EventEmitter<FavoriteHotelEventData> = new EventEmitter<FavoriteHotelEventData>();

  public textFilterValue: string = null;

  public starsFilterValue: number[] = null;

  public get starList(): number[] {
    return this.selectedCategory.categoryHotels.map((hotel: IHotel) => hotel.stars);
  }

  public hotelPicked(hotelId: number): void {
    this.hotelWasSelected.emit(hotelId);
  }

  public categoryChanged(categoryName: string): void {
    this.categoryWasSelected.emit(categoryName);
  }

  public textChanged(filterValue: string): void {
    this.textFilterValue = filterValue;
  }

  public starsSelected(filterValue: number[]): void {
    this.starsFilterValue = filterValue;
  }

  public isFavorite = (hotel: IHotel): boolean => this.favoriteHotels.includes(hotel);

  public changeFavorite(eventData: FavoriteHotelEventData): void {
    this.favoriteHotelsChanged.emit(eventData);
  }

  public ngOnInit(): void {
  }
}