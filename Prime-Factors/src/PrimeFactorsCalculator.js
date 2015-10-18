function PrimeFactorsCalculator() {
  this.getPrimeFactors = function(number) {
    primeFactors = [];
    while (number >= 1) {
      if (number % 2 === 0) {
        primeFactors.push(2);
        number = number/2;
      } else if (number % 3 === 0) {
        primeFactors.push(3);
        number = number/3;
      } else {
        number = 0;
      }
    }
    return primeFactors;
  }
}
