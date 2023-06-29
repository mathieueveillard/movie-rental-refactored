import Movie from ".";

class RegularMovie extends Movie {
  computeAmountOwed = (days: number) => {
    let amount = 2;
    if (days > 2) {
      amount += (days - 2) * 1.5;
    }
    return amount;
  };

  computeFrequentRenterPoints = (days: number) => 1;
}

export default RegularMovie;
