import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IHotel } from '../models/IHotel';
import { FavoriteHotelEventData } from '../models/FavoriteHotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input()
  public hotel: IHotel;

  @Input()
  public favorite: boolean;

  @Output()
  public favoriteChanged: EventEmitter<FavoriteHotelEventData> = new EventEmitter<FavoriteHotelEventData>();

  public changeFavorite(added: boolean): void {
    this.favoriteChanged.emit({ hotelId: this.hotel.id, isAdded: added });

  }

  public ngOnInit(): void {
  }
}
