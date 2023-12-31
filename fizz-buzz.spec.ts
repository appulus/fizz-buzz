import { fizzBuzz } from "./fizz-buzz";

describe("fizzBuzz", () => {
  it("should return a list whose length is the same as the initial number", () => {
    const given = 2;

    const actual = fizzBuzz(given);

    expect(actual).toHaveLength(2);
  });

  it("should replace with fizz whenever there is a number that is divisible by 3", () => {
    const given = 3;

    const actual = fizzBuzz(given);

    expect(actual).toEqual([1, 2, "fizz"]);
  });

  it("should replace with buzz whenever there is a number that is divisible by 5", () => {
    const given = 5;

    const actual = fizzBuzz(given);

    expect(actual).toEqual([1, 2, "fizz", 4, "buzz"]);
  });
});
