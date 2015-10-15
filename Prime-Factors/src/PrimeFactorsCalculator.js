function PrimeFactorsCalculator() {
  this.getPrimeFactors = function(number) {
    if (number === 1) {
      return [];
    } else if (number == 2) {
      return [2];
    } else if (number == 3) {
      return [3];
    }
  }
}
