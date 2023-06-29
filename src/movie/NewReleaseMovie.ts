import Movie from ".";

class NewReleaseMovie extends Movie {
  computeAmountOwed = (days: number) => {
    return days * 3;
  };

  computeFrequentRenterPoints = (days: number) => {
    let points = 1;
    if (days > 1) {
      points += 1;
    }
    return points;
  };
}

export default NewReleaseMovie;
