const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//вероятности
function probability(txt, alphabet) {
  let prob = {};
  for (let i = 0; i < alphabet.length; i++) {
    let letter = alphabet.charAt(i);
    regExp = new RegExp(letter, "g");
    if (txt.match(regExp) === null) {
      p = 0;
    } else {
      p = txt.match(regExp).length / txt.length; //.toFixed(4);
    }
    prob[letter] = p;
  }
  return prob;
}

function rotorShift(arr) {
  const x = arr.slice(1, arr.length);
  x.push(arr[0]);
  return x;
}

function enigma(message, a, b, c) {
  let rotorIII = Array.from("BDFHJLCPRTXVZNYEIWGAKMUSQO");
  let rotorVII = Array.from("NZJHGRCXMYSWBOUFAIVLPEKQDT");
  let rotorI = Array.from("EKMFLGDQVZNTOWYHXUSPAIBRCJ");
  let reflectorBDunn = Array.from("AEBNCKDQFUGYHWIJLOMPRXSZTV");
  let alpabet = Array.from("ASBCDEFGHIJKLMNOPQRSTUVWXYZ");

  for (let i = 0; i < a; i++) {
    rotorIII = rotorShift(rotorIII);
  }
  for (let i = 0; i < b; i++) {
    rotorVII = rotorShift(rotorVII);
  }
  for (let i = 0; i < c; i++) {
    rotorI = rotorShift(rotorI);
  }
  let ind;
  let result = [];

  //R
  ind = rotorI[alpabet.indexOf(message[0])];
  //M
  ind = rotorVII[alpabet.indexOf(ind)];
  //L
  ind = rotorIII[alpabet.indexOf(ind)];
  //рефлектор
  if (reflectorBDunn.indexOf(ind) % 2 == 0) {
    ind = reflectorBDunn[reflectorBDunn.indexOf(ind) + 1];
  } else {
    ind = reflectorBDunn[reflectorBDunn.indexOf(ind) - 1];
  }
  //L
  ind = alpabet[rotorIII.indexOf(ind)];
  //M
  ind = alpabet[rotorVII.indexOf(ind)];
  //R
  ind = alpabet[rotorI.indexOf(ind)];
  result.push(ind);

  for (let i = 1; i < message.length; i++) {
    rotorIII = rotorShift(rotorIII);
    if (rotorI[0] === "A") {
      rotorVII = rotorShift(rotorVII);
    }
    rotorI = rotorShift(rotorShift(rotorI));
    //R
    ind = rotorI[alpabet.indexOf(message[i])];
    //M
    ind = rotorVII[alpabet.indexOf(ind)];
    //L
    ind = rotorIII[alpabet.indexOf(ind)];
    //рефлектор
    if (reflectorBDunn.indexOf(ind) % 2 == 0) {
      ind = reflectorBDunn[reflectorBDunn.indexOf(ind) + 1];
    } else {
      ind = reflectorBDunn[reflectorBDunn.indexOf(ind) - 1];
    }
    //L
    ind = alpabet[rotorIII.indexOf(ind)];
    //M
    ind = alpabet[rotorVII.indexOf(ind)];
    //R
    ind = alpabet[rotorI.indexOf(ind)];
    result.push(ind);
  }
  return result;
}

let str = "GURINAKRISTINASERGEEVNA";

console.log("\n1, 0, 1");
let encoded1 = enigma(str, 1, 0, 1)
  .toString()
  .replace(/[^A-Z]+/g, "");
console.log(encoded1);
let decoded1 = enigma(encoded1, 1, 0, 1)
  .toString()
  .replace(/[^A-Z]+/g, "");
console.log(decoded1);

console.log("\n1, 2, 1");
let encoded2 = enigma(str, 1, 2, 1)
  .toString()
  .replace(/[^A-Z]+/g, "");
console.log(encoded2);
let decoded2 = enigma(encoded2, 1, 2, 1)
  .toString()
  .replace(/[^A-Z]+/g, "");
console.log(decoded2);

console.log("\n2, 3, 4");
let encoded3 = enigma(str, 2, 3, 4)
  .toString()
  .replace(/[^A-Z]+/g, "");
console.log(encoded3);
let decoded3 = enigma(encoded3, 2, 3, 4)
  .toString()
  .replace(/[^A-Z]+/g, "");
console.log(decoded3);

console.log("\n5, 2, 6");
let encoded4 = enigma(str, 5, 2, 6)
  .toString()
  .replace(/[^A-Z]+/g, "");
console.log(encoded4);
let decoded4 = enigma(encoded4, 5, 2, 6)
  .toString()
  .replace(/[^A-Z]+/g, "");
console.log(decoded4);

console.log("\n4, 7, 1");
let encoded5 = enigma(str, 4, 7, 1)
  .toString()
  .replace(/[^A-Z]+/g, "");
console.log(encoded5);
let decoded5 = enigma(encoded5, 4, 7, 1)
  .toString()
  .replace(/[^A-Z]+/g, "");
console.log(decoded5);

console.log("\n14, 2, 11");
let encoded6 = enigma(str, 1, 1, 1)
  .toString()
  .replace(/[^A-Z]+/g, "");
console.log(encoded6);
let decoded6 = enigma(encoded6, 1, 1, 1)
  .toString()
  .replace(/[^A-Z]+/g, "");
console.log(decoded6);

console.log(probability("DDVDXNMEWWQHYEVJJXNQIPU", alphabet));
