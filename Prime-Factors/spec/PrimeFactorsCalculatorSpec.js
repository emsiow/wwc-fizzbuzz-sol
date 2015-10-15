describe("Prime Factors Calculator", function() {
  var fizzbuzz;

  beforeEach(function() {
    primeFactorsCalculator = new PrimeFactorsCalculator();
  });

  it("should return empty array for 1", function () {
    expect(primeFactorsCalculator.getPrimeFactors(1)).toEqual([]);
  });

});
