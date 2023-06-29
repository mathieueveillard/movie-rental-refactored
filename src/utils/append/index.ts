const append =
  (separator: string) =>
  (accumulator: string, current: string): string =>
    accumulator + current + separator;

export default append;
