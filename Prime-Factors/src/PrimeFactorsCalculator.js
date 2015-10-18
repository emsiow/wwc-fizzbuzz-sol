function PrimeFactorsCalculator() {
  this.getPrimeFactors = function(number) {
    primeFactors = [];
    if (number % 2 == 0) {
      primeFactors.push(2);
    }
    if (number % 3 == 0) {
      primeFactors.push(3);
    }
    return primeFactors;
  }
}
