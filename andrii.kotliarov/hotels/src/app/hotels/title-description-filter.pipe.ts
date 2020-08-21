import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from './models/IHotel';

@Pipe({
  name: 'titleDescriptionFilter'
})
export class TitleDescriptionFilterPipe implements PipeTransform {

  public transform(hotels: IHotel[], text: string): IHotel[] {
    if (text && text.length && hotels && hotels.length) {
      const textLowerCase: string = text.toLocaleLowerCase();
      return hotels.filter((hotel: IHotel) => {
        const { description, title } = hotel;
        const comply: boolean = description.toLocaleLowerCase().includes(textLowerCase)
        || title.toLocaleLowerCase().includes(textLowerCase);
        return comply;
      });
    }
    return hotels;
  }

}
