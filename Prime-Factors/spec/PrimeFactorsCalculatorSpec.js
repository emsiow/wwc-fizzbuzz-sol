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

  it("should return [2, 2] for 4", function() {
    expect(primeFactorsCalculator.getPrimeFactors(4)).toEqual([2, 2]);
  });

  it("should return [] for 5", function() {
    expect(primeFactorsCalculator.getPrimeFactors(5)).toEqual([]);
  });

  it("should return [2, 3] for 6", function() {
    expect(primeFactorsCalculator.getPrimeFactors(6)).toEqual([2, 3]);
  });

  it("should return [2, 2, 2] for 8", function() {
    expect(primeFactorsCalculator.getPrimeFactors(8)).toEqual([2, 2, 2]);
  });

});
