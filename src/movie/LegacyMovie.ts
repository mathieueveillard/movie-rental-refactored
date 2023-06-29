import Movie from ".";
import ChildrenMovie from "./ChildrenMovie";
import NewReleaseMovie from "./NewReleaseMovie";
import RegularMovie from "./RegularMovie";

class LegacyMovie {
  static REGULAR = 0;
  static NEW_RELEASE = 1;
  static CHILDREN = 2;

  constructor(private title: string, private priceCode: number) {}

  getMovie = (): Movie => {
    switch (this.priceCode) {
      case LegacyMovie.REGULAR:
        return new RegularMovie(this.title, this.priceCode);
      case LegacyMovie.NEW_RELEASE:
        return new NewReleaseMovie(this.title, this.priceCode);
      case LegacyMovie.CHILDREN:
        return new ChildrenMovie(this.title, this.priceCode);
    }
  };
}

export default LegacyMovie;
