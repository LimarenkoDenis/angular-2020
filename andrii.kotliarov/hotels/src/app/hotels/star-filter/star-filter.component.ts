import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IHotelStar } from '../models/IHotelStar';
import { HotelStarred } from '../models/HotelStarred';
import { isDefined } from '@angular/compiler/src/util';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-star-filter',
  templateUrl: './star-filter.component.html',
  styleUrls: ['./star-filter.component.css']
})
export class StarFilterComponent implements OnInit {
  @Input()
  public starList: number[];

  @Output()
  public selectedStars: EventEmitter<number[]> = new EventEmitter<number[]>();

  private _stars: IHotelStar[];

  public get stars(): IHotelStar[] {
    return this._stars;
  }

  public get someStars(): boolean {
    return !this.allStars && isDefined(this._stars.find((st: IHotelStar) => st.selected));
  }

  public get allStars(): boolean {
    return this._stars.every((st: IHotelStar) => st.selected);
  }

  public selectAll(checked: boolean): void {
    this._stars.forEach((st: IHotelStar) => st.selected = checked);
    this.updateSomeStars();
  }

  public updateSomeStars(): void {
    this.selectedStars.emit(this._stars.filter((st: IHotelStar) => st.selected).map((st: IHotelStar) => st.starNo));
  }

  public ngOnInit(): void {
    this._stars = Array.from(new Set(this.starList)).sort().map((st: number) => new  HotelStarred(st));
  }
}
