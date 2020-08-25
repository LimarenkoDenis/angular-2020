import { IHotelStar } from "./IHotelStar";

export class HotelStarred implements IHotelStar {
    public selected: boolean = true;

    public constructor(public starNo: number) {
    }

    public get displayText(): string {
        if (this.starNo) {
            return Array(this.starNo).fill(this.starNo).reduce((prev: string) => `${prev}*`, '');
        }
        return '';
    }
}