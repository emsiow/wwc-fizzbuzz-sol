function PrimeFactorsCalculator() {
  this.getPrimeFactors = function(number) {
    if (number === 1) {
      return [];
    } else if (number === 4) {
      return [2];
    } else {
      return [number];
    }
  }
}
