import { Rental } from "../rental";
import append from "../utils/append";
import sum from "../utils/sum";

export class Customer {
  private rentals: Rental[] = [];

  constructor(private name: string) {}

  rentMovie(arg: Rental) {
    this.rentals.push(arg);
  }

  computeStatement(): string {
    let result = "Rental Record for " + this.name + "\n";

    const amounts = this.rentals.map((rental) => rental.computeAmountOwed());

    const figures = amounts.map(([_, figures]) => figures).reduce(append("\n"), "");
    result += figures;

    const totalAmount = amounts.map(([amount]) => amount).reduce(sum, 0);
    result += "Amount owed is " + totalAmount.toFixed(1) + "\n";

    const points = this.rentals.map((rental) => rental.computeFrequentRenterPoints()).reduce(sum, 0);
    result += "You earned " + points + " frequent renter points";

    return result;
  }
}
