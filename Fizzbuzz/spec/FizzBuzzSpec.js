describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("returns 1 for input '1'", function() {
    expect(fizzbuzz.get(1)).toBe(1);
  });

  it("returns 2 for input '2'", function() {
    expect(fizzbuzz.get(2)).toBe(2);
  });

  it("returns 'Fizz' for input '3'", function() {
    expect(fizzbuzz.get(3)).toBe('Fizz');
  });

});
