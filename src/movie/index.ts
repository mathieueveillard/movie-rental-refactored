import { PriceAndPointsStrategy } from "../rental";

abstract class Movie implements PriceAndPointsStrategy {
  constructor(private title: string, private priceCode: number) {}

  abstract computeAmountOwed: (days: number) => number;

  abstract computeFrequentRenterPoints: (days: number) => number;

  getTitle(): string {
    return this.title;
  }
}

export default Movie;
