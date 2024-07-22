const RSA = require("./rsa");
const ElGamal = require("./elGamal");
const Schnorr = require("./schnorr");

const { performance } = require("perf_hooks");

const rsa = new RSA();
const elGamal = new ElGamal();
const schnorr = new Schnorr();
const originalText = "Gurina Kristina Sergeevna";

const renderRSA = () => {
  const publicKey = rsa.getPublicKey();

  let startTime = performance.now();
  const digitalSign = rsa.createDigitalSignature(originalText);
  let endTime = performance.now();
  const signTime = endTime - startTime;

  startTime = performance.now();
  const verified = rsa.verifyDigitalSignature(originalText, digitalSign);
  endTime = performance.now();
  const verificationTime = endTime - startTime;
  console.log("----------------------------RSA------------------------------");
  console.log("Original Text:", originalText);
  console.log("Sign Time:", signTime.toFixed(3));
  console.log("Public Key:", publicKey);
  console.log("Verification Time:", verificationTime.toFixed(3));
  console.log("Digital Signature:", digitalSign);
  console.log("Verified:", verified);
};

const renderElGamal = () => {
  const publicKey = elGamal.getPublicKey();

  let startTime = performance.now();
  const digitalSign = elGamal.createDigitalSignature(originalText);
  let endTime = performance.now();
  const signTime = endTime - startTime;

  startTime = performance.now();
  const verified = elGamal.verifyDigitalSignature(originalText, digitalSign);
  endTime = performance.now();
  const verificationTime = endTime - startTime;
  console.log(
    "-------------------------- Эль-Гамаль--------------------------------"
  );
  console.log("Original Text:", originalText);
  console.log("Sign Time:", signTime.toFixed(3));
  console.log("Public Key:", publicKey);
  console.log("Verification Time:", verificationTime.toFixed(3));
  console.log("Digital Signature:", digitalSign.join(", "));
  console.log("Verified:", verified);
};

const renderSchnorr = () => {
  const publicKey = schnorr.getPublicKey();

  let startTime = performance.now();
  const digitalSign = schnorr.generateDigitalSignature(originalText);
  let endTime = performance.now();
  const signTime = endTime - startTime;

  startTime = performance.now();
  const verified = schnorr.verifyDigitalSignature(originalText, digitalSign);
  endTime = performance.now();
  const verificationTime = endTime - startTime;
  console.log(
    "--------------------------- Шнорра -------------------------------"
  );
  console.log("Original Text:", originalText);
  console.log("Sign Time:", signTime.toFixed(3));
  console.log("Public Key:", publicKey);
  console.log("Verification Time:", verificationTime.toFixed(3));
  console.log("Digital Signature:", digitalSign.join(", "));
  console.log("Verified:", verified);
};

renderRSA();
renderElGamal();
renderSchnorr();
