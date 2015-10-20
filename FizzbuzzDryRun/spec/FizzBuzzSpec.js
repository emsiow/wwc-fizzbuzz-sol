describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("returns 1 for input '1'", function() {
    expect(fizzbuzz.get(1)).toBe(1);
  });

});
