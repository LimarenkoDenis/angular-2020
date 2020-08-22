import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../models/IHotel';
import { isDefined } from '@angular/compiler/src/util';

@Pipe({
  name: 'hotelsFilter'
})
export class HotelsFilterPipe implements PipeTransform {

  public transform(hotels: IHotel[], text: string, stars: number[]): IHotel[] {
    let filtered: IHotel[] = hotels;

    if (hotels && hotels.length) {
      if (text && text.length) {
        const textLowerCase: string = text.toLocaleLowerCase();
        filtered = filtered.filter((hotel: IHotel) => {
          const { description, title } = hotel;
          const comply: boolean = description.toLocaleLowerCase().includes(textLowerCase)
          || title.toLocaleLowerCase().includes(textLowerCase);
          return comply;
        });
      }

      if (isDefined(stars) && stars !== null) {
        filtered = filtered.filter((hotel: IHotel) => {
          const comply: boolean = stars.includes(hotel.stars);
          return comply;
        });
      }
    }

    return filtered;
  }

}
