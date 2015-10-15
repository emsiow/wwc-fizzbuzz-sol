describe("Prime Factors Calculator", function() {
  var fizzbuzz;

  beforeEach(function() {
    primeFactorsCalculator = new PrimeFactorsCalculator();
  });

  it("should return empty array for 1", function () {
    expect(primeFactorsCalculator.getPrimeFactors(1)).toEqual([]);
  });

  it("should return [2] for 2", function () {
    expect(primeFactorsCalculator.getPrimeFactors(2)).toEqual([2]);
  });

  it("should return [3] for 3", function () {
    expect(primeFactorsCalculator.getPrimeFactors(3)).toEqual([3]);
  });

});
