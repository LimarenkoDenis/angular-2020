import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from './../models/IHotel';
import { ICategory } from '../models/ICategory';

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

  @Output()
  public hotelWasSelected: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public categoryWasSelected: EventEmitter<string> = new EventEmitter<string>();

  public filterValue: string = null;

  public hotelPicked(hotelId: number): void {
    this.hotelWasSelected.emit(hotelId);
  }

  public categoryChanged(categoryName: string): void {
    this.categoryWasSelected.emit(categoryName);
  }

  public filterChanged(filterValue: string): void {
    this.filterValue = filterValue;
  }

  public ngOnInit(): void {
  }
}