import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from '@app/models/IWeather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input()
  public weather: IWeather;

  @Input()
  public description: string;

  public ngOnInit(): void {
  }
}
