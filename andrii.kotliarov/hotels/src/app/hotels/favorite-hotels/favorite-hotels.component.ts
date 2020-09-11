import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from '@app/models/IHotel';
import { FavoriteHotelEventData } from '@app/models/FavoriteHotel';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent implements OnInit {
  @Input()
  public hotels: IHotel[];

  @Output()
  public favoriteHotelsChanged: EventEmitter<FavoriteHotelEventData> = new EventEmitter<FavoriteHotelEventData>();

  public changeFavorite(eventData: FavoriteHotelEventData): void {
    this.favoriteHotelsChanged.emit(eventData);
  }

  public ngOnInit(): void {
  }
}
