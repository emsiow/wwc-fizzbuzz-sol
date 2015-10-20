function FizzBuzz() {
  this.get = function(number) {
    if (divisibleByThree(number) && divisibleByFive(number)) {
      return "FizzBuzz";
    } else if (divisibleByThree(number)) {
      return "Fizz";
    } else if (divisibleByFive(number)) {
      return "Buzz";
    }
    return number;
  }
}

function divisibleByThree(number) {
  return (number % 3 === 0);
}

function divisibleByFive(number) {
  return (number % 5 === 0);
}
