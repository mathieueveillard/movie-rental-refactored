import LegacyMovie from "../movie/LegacyMovie";

export type PriceAndPointsStrategy = {
  computeAmountOwed: (days: number) => number;
  computeFrequentRenterPoints: (days: number) => number;
};

export class Rental {
  constructor(private legacyMovie: LegacyMovie, private days: number) {}

  computeAmountOwed = (): [number, string] => {
    const amount = this.legacyMovie.getMovie().computeAmountOwed(this.days);
    const figures = "\t" + this.legacyMovie.getMovie().getTitle() + "\t" + amount.toFixed(1);
    return [amount, figures];
  };

  computeFrequentRenterPoints = (): number => {
    return this.legacyMovie.getMovie().computeFrequentRenterPoints(this.days);
  };
}
