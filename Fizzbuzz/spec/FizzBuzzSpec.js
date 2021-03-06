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

  it("returns 'Buzz' for input '5'", function() {
    expect(fizzbuzz.get(5)).toBe('Buzz');
  });

  it("returns 'Fizz' for input '6'", function() {
    expect(fizzbuzz.get(6)).toBe('Fizz');
  });

  it("returns 'Buzz' for input '10'", function() {
    expect(fizzbuzz.get(10)).toBe('Buzz');
  });

  it("returns 'FizzBuzz' for input '15'", function() {
    expect(fizzbuzz.get(15)).toBe('FizzBuzz');
  });

  it("returns 'FizzBuzz' for input '30'", function() {
    expect(fizzbuzz.get(30)).toBe('FizzBuzz');
  });

});
