const bigInt = require("big-integer");

const generatePrimeNumber = (bitLength) => {
  let primeCandidate;
  do {
    primeCandidate = bigInt.randBetween(
      bigInt(2).pow(bitLength - 1),
      bigInt(2).pow(bitLength)
    );
  } while (!primeCandidate.isPrime());

  return primeCandidate;
};

const generateCoprimeNumber = (fi) => {
  const min = fi.add(1);
  const max = fi.times(2);
  let coprime;

  do {
    coprime = bigInt.randBetween(min, max);
  } while (!isCoprime(fi, coprime));

  return coprime;
};

const isCoprime = (a, b) => {
  return bigInt.gcd(a, b).eq(1);
};

module.exports = { generatePrimeNumber, generateCoprimeNumber, isCoprime };
