import { Movie } from "../movie";
import { Rental } from "../rental";
import { CustomerBuilder } from "./customer-builder";

describe("Regular movies", () => {
  test("1-day rental", () => {
    const movie = new Movie("Gone with the Wind", Movie.REGULAR);

    const rental = new Rental(movie, 1);

    const customer = new CustomerBuilder() //
      .withName("Sallie")
      .withRentals(rental)
      .build();

    const expected =
      "Rental Record for Sallie\n" +
      "\tGone with the Wind\t2.0\n" +
      "Amount owed is 2.0\n" +
      "You earned 1 frequent renter points";

    expect(customer.statement()).toEqual(expected);
  });

  test("2-days rental", () => {
    const movie = new Movie("Gone with the Wind", Movie.REGULAR);

    const rental = new Rental(movie, 2);

    const customer = new CustomerBuilder() //
      .withName("Sallie")
      .withRentals(rental)
      .build();

    const expected =
      "Rental Record for Sallie\n" +
      "\tGone with the Wind\t2.0\n" +
      "Amount owed is 2.0\n" +
      "You earned 1 frequent renter points";

    expect(customer.statement()).toEqual(expected);
  });

  test("More than 2-days rental", () => {
    const movie = new Movie("Gone with the Wind", Movie.REGULAR);

    const rental = new Rental(movie, 3);

    const customer = new CustomerBuilder() //
      .withName("Sallie")
      .withRentals(rental)
      .build();

    const expected =
      "Rental Record for Sallie\n" +
      "\tGone with the Wind\t3.5\n" +
      "Amount owed is 3.5\n" +
      "You earned 1 frequent renter points";

    expect(customer.statement()).toEqual(expected);
  });
});

describe("New release movies", () => {
  test("1-day rental", () => {
    const movie = new Movie("Star Wars", Movie.NEW_RELEASE);

    const rental = new Rental(movie, 1);

    const customer = new CustomerBuilder() //
      .withName("Sallie")
      .withRentals(rental)
      .build();

    const expected =
      "Rental Record for Sallie\n" +
      "\tStar Wars\t3.0\n" +
      "Amount owed is 3.0\n" +
      "You earned 1 frequent renter points";

    expect(customer.statement()).toEqual(expected);
  });

  test("2-days rental", () => {
    const movie = new Movie("Star Wars", Movie.NEW_RELEASE);

    const rental = new Rental(movie, 2);

    const customer = new CustomerBuilder() //
      .withName("Sallie")
      .withRentals(rental)
      .build();

    const expected =
      "Rental Record for Sallie\n" +
      "\tStar Wars\t6.0\n" +
      "Amount owed is 6.0\n" +
      "You earned 2 frequent renter points";

    expect(customer.statement()).toEqual(expected);
  });

  test("More than 2-days rental", () => {
    const movie = new Movie("Star Wars", Movie.NEW_RELEASE);

    const rental = new Rental(movie, 3);

    const customer = new CustomerBuilder() //
      .withName("Sallie")
      .withRentals(rental)
      .build();

    const expected =
      "Rental Record for Sallie\n" +
      "\tStar Wars\t9.0\n" +
      "Amount owed is 9.0\n" +
      "You earned 2 frequent renter points";

    expect(customer.statement()).toEqual(expected);
  });
});

describe("Children movies", () => {
  test("1-day rental", () => {
    const movie = new Movie("Madagascar", Movie.CHILDREN);

    const rental = new Rental(movie, 1);

    const customer = new CustomerBuilder() //
      .withName("Sallie")
      .withRentals(rental)
      .build();

    const expected =
      "Rental Record for Sallie\n" +
      "\tMadagascar\t1.5\n" +
      "Amount owed is 1.5\n" +
      "You earned 1 frequent renter points";

    expect(customer.statement()).toEqual(expected);
  });

  test("2-days rental", () => {
    const movie = new Movie("Madagascar", Movie.CHILDREN);

    const rental = new Rental(movie, 2);

    const customer = new CustomerBuilder() //
      .withName("Sallie")
      .withRentals(rental)
      .build();

    const expected =
      "Rental Record for Sallie\n" +
      "\tMadagascar\t1.5\n" +
      "Amount owed is 1.5\n" +
      "You earned 1 frequent renter points";

    expect(customer.statement()).toEqual(expected);
  });

  test("3-days rental", () => {
    const movie = new Movie("Madagascar", Movie.CHILDREN);

    const rental = new Rental(movie, 3);

    const customer = new CustomerBuilder() //
      .withName("Sallie")
      .withRentals(rental)
      .build();

    const expected =
      "Rental Record for Sallie\n" +
      "\tMadagascar\t1.5\n" +
      "Amount owed is 1.5\n" +
      "You earned 1 frequent renter points";

    expect(customer.statement()).toEqual(expected);
  });

  test("More than 3-days rental", () => {
    const movie = new Movie("Madagascar", Movie.CHILDREN);

    const rental = new Rental(movie, 4);

    const customer = new CustomerBuilder() //
      .withName("Sallie")
      .withRentals(rental)
      .build();

    const expected =
      "Rental Record for Sallie\n" +
      "\tMadagascar\t3.0\n" +
      "Amount owed is 3.0\n" +
      "You earned 1 frequent renter points";

    expect(customer.statement()).toEqual(expected);
  });
});

test("All kind of movies combined", () => {
  const movie1 = new Movie("Madagascar", Movie.CHILDREN);
  const rental1 = new Rental(movie1, 6);

  const movie2 = new Movie("Star Wars", Movie.NEW_RELEASE);
  const rental2 = new Rental(movie2, 2);

  const movie3 = new Movie("Gone with the Wind", Movie.REGULAR);
  const rental3 = new Rental(movie3, 8);

  const customer1 = new CustomerBuilder() //
    .withName("David")
    .withRentals(rental1, rental2, rental3)
    .build();

  const expected =
    "Rental Record for David\n" +
    "\tMadagascar\t6.0\n" +
    "\tStar Wars\t6.0\n" +
    "\tGone with the Wind\t11.0\n" +
    "Amount owed is 23.0\n" +
    "You earned 4 frequent renter points";

  expect(customer1.statement()).toEqual(expected);
});
