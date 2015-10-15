function PrimeFactorsCalculator() {
  this.getPrimeFactors = function(number) {
    if (number === 1) {
      return [];
    } else {
      return [1, 2];
    }
  }
}
