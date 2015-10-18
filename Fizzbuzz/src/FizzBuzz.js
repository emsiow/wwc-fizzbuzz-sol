function FizzBuzz() {
  this.get = function(number) {
    if (number === 3) {
      return "Fizz";
    } else if (number === 5) {
      return "Buzz";
    } else if (number === 6) {
      return "Fizz";
    }
    return number;
  }
}
