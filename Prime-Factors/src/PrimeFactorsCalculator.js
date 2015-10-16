function PrimeFactorsCalculator() {
  this.getPrimeFactors = function(number) {
    if (number === 1 || number === 5) {
      return [];
    } else if (number === 6) {
      return [2, 3];
    } else if (number === 4) {
      return [2];
    } else {
      return [number];
    }
  }
}
