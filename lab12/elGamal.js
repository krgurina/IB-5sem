const crypto = require("crypto");
const bigInt = require("big-integer");
const {
  generateCoprimeNumber,
  generatePrimeNumber,
  isCoprime,
} = require("./mathUtils");

class ElGamal {
  constructor() {
    this.p = generatePrimeNumber(100);
    this.g = generateCoprimeNumber(this.p);
    this.x = bigInt.randBetween(bigInt(2), this.p.subtract(1));
    this.y = this.g.modPow(this.x, this.p);
  }

  getPublicKey() {
    return { p: this.p, g: this.g, y: this.y };
  }

  createDigitalSignature(message) {
    const hash = crypto.createHash("sha256").update(message, "utf8").digest();
    let digitalSignI;
    do {
      let k = bigInt.randBetween(bigInt(2), this.p.subtract(2));
      while (!isCoprime(k, this.p.subtract(1))) {
        k = bigInt.randBetween(bigInt(2), this.p.subtract(2));
      }
      digitalSignI = [];
      digitalSignI[0] = this.g.modPow(k, this.p);
      let temp = bigInt(hash.readBigInt64LE()).subtract(
        this.x.multiply(digitalSignI[0])
      );
      temp = temp
        .multiply(k.modInv(this.p.subtract(1)))
        .mod(this.p.subtract(1));
      if (temp.isNegative()) {
        temp = this.p.subtract(1).subtract(temp.abs());
      }
      digitalSignI[1] = temp;
    } while (digitalSignI[1].equals(0));
    return digitalSignI;
  }

  verifyDigitalSignature(message, digitalSignature) {
    const hash = crypto.createHash("sha256").update(message, "utf8").digest();
    const leftPart = this.g.modPow(hash.readBigInt64LE(), this.p);
    const rightPart = this.y
      .modPow(digitalSignature[0], this.p)
      .multiply(digitalSignature[0].modPow(digitalSignature[1], this.p))
      .mod(this.p);
    return leftPart.equals(rightPart);
  }
}

module.exports = ElGamal;
