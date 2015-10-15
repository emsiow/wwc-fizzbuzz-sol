describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("should return 1 for input '1'", function() {
    expect(fizzbuzz.get(1)).toBe(1);
  });

  it("should return 2 for input '2'", function() {
    expect(fizzbuzz.get(2)).toBe(2);
  })
});
