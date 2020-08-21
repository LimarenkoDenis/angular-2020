import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-hotels-filter',
  templateUrl: './hotels-filter.component.html',
  styleUrls: ['./hotels-filter.component.css']
})
export class HotelsFilterComponent implements OnInit {
  @Input()
  public filterValue: string;
  @Output()
  public filtered: EventEmitter<string> = new EventEmitter<string>();

  public constructor() { }

  public filterChanged(value: string): void {
    console.log(value)
    this.filtered.emit(value);
  }

  public clear(): void {
    this.filtered.emit(null);
  }

  public ngOnInit(): void {
  }
}
