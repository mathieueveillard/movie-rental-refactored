import Movie from ".";

class ChildrenMovie extends Movie {
  computeAmountOwed = (days: number) => {
    let amount = 1.5;
    if (days > 3) {
      amount += (days - 3) * 1.5;
    }
    return amount;
  };

  computeFrequentRenterPoints = (days: number) => 1;
}

export default ChildrenMovie;
