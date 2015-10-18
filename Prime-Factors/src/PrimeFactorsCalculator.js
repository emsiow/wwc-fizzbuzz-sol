function PrimeFactorsCalculator() {
  this.getPrimeFactors = function(number) {
    primeFactors = [];
    divisor = 2;
    while (number !== 1) {
      if (number % divisor == 0) {
        primeFactors.push(divisor);
        number = number / divisor;
      } else {
        divisor += 1;
      }
    }
    return primeFactors;
  }
}
