describe("Prime Factors Calculator", function() {
  var fizzbuzz;

  beforeEach(function() {
    primeFactorsCalculator = new PrimeFactorsCalculator();
  });

  it("should return empty array for 1", function () {
    expect(primeFactorsCalculator.getPrimeFactors(1)).toEqual([]);
  });

  it("should return [1, 2] for 2", function () {
    expect(primeFactorsCalculator.getPrimeFactors(2)).toEqual([1, 2]);
  });

});
