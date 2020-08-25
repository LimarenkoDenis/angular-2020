import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from '../models/ICategory';
import { IHotel } from '../models/IHotel';

@Component({
  selector: 'app-hotel-categories',
  templateUrl: './hotel-categories.component.html',
  styleUrls: ['./hotel-categories.component.css']
})
export class HotelCategoriesComponent implements OnInit {
  @Input()
  public categories: ICategory<IHotel>[];

  @Input()
  public selectedCategory: ICategory<IHotel>;

  @Output()
  public categoryChanged: EventEmitter<string> = new EventEmitter<string>();

  public constructor() { }

  public select(category: ICategory<IHotel>): void {
    this.categoryChanged.emit(category.categoryName);
  }

  public isSelected(category: ICategory<IHotel>): boolean {
    return category.categoryName === this.selectedCategory.categoryName;
  }

  public ngOnInit(): void {
  }
}
