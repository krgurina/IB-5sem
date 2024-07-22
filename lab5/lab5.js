const fs = require("fs");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const text = fs.readFileSync("text.txt", { encoding: "utf8" }).toString();
let processedText = "";
for (let i = 0; i < text.length; i++) {
  const char = text[i].toUpperCase();
  if (char >= "A" && char <= "Z") {
    processedText += char;
  } else if (char === " ") {
    processedText += " ";
  }
}

processedText = processedText.slice(0, 625);
//2

function crypt(message, colsKey, rowsKey) {
  var result = [];

  var colsCount = colsKey.length;
  var rowsCount = rowsKey.length;
  for (var row = 0; row < rowsCount; row++) {
    for (var col = 0; col < colsCount; col++) {
      var newCol = colsKey[col] - 1;
      var newRow = rowsKey[row] - 1;
      var index = newRow * colsCount + newCol;
      if (index < message.length) {
        result[index] = message[row * colsCount + col];
      } else {
        result[index] = " ";
      }
    }
  }

  return result;
}

function decrypt(message, colsKey, rowsKey) {
  var result = [];

  var colsCount = colsKey.length;
  var rowsCount = rowsKey.length;
  for (var row = 0; row < rowsCount; row++) {
    for (var col = 0; col < colsCount; col++) {
      var newCol = colsKey[col] - 1;
      var newRow = rowsKey[row] - 1;
      var index = row * colsCount + col;
      if (index < message.length) {
        result[index] = message[newRow * colsCount + newCol];
      } else {
        result[index] = " ";
      }
    }
  }
  return result;
}

//1
const input =
  "A feature of ciphers of this subclass is at least two fold permutation of the characters of the encrypted message In the simplest case, this can be set by mixing not only the columns as in the example but also the rows Thus this case corresponds to the use of two main keys the length of one of them is equal to the number of columns the other to the number of rows We can also refer to the key information as ways to enter a message and read individual characters from the current column of the matrix".toLocaleUpperCase();
const result = input.toUpperCase();
let t0 = performance.now();
const encryptedText = zigzagCode(input);
let t1 = performance.now();
console.log(probability(input, alphabet));

console.log("[Зиграз Кодирование]:", encryptedText);
console.log("[Зиграз Кодирование]", t1 - t0, "мс");

let t2 = performance.now();

const decryptedText = zigzagDecode(encryptedText);
let t3 = performance.now();
console.log(probability(decryptedText, alphabet));
console.log("[Зиграз Раскодирование]:", result);
console.log("[Зиграз Раскодирование]", t3 - t2, "мс");

//2
//46278351 Кристина
let t4 = performance.now();
encryptedMultText = crypt(processedText, "46278351", "265341").join("");
let t5 = performance.now();
console.log(probability(processedText, alphabet));

fs.writeFileSync("mult.txt", encryptedMultText, { encoding: "utf8" });
console.log("[Множественная Кодирование]", encryptedMultText, "");
let t6 = performance.now();
decryptedMultText = decrypt(encryptedMultText, "46278351", "265341").join("");
let t7 = performance.now();
console.log(probability(encryptedMultText, alphabet));
fs.writeFileSync("demult.txt", decryptedMultText, { encoding: "utf8" });
console.log("[Множественная Раскодирование]", decryptedMultText, "");
console.log("[Множественная Кодирование]", t5 - t4, "мс");
console.log("[Множественная Раскодирование]", t7 - t6, "мс");

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

function zigzagCode(str) {
  let arr = new Array(25).fill(null).map(() => new Array(25).fill("*"));
  let result = "";

  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      let charIndex = i * 25 + j;
      if (charIndex < str.length) {
        arr[i][j] = str[charIndex];
      }
    }
  }

  for (let j = 0; j < 25; j++) {
    if (j % 2 === 0) {
      for (let i = 0; i < 25; i++) {
        if (arr[i][j] !== "*") {
          result += arr[i][j];
        }
      }
    } else {
      for (let i = 24; i >= 0; i--) {
        if (arr[i][j] !== "*") {
          result += arr[i][j];
        }
      }
    }
  }
  return result;
}

function zigzagDecode(str) {
  let arr = new Array(25).fill(null).map(() => new Array(25).fill("*"));
  let result = "";
  let strIndex = 0;
  for (let j = 0; j < 25; j++) {
    if (j % 2 === 0) {
      for (let i = 0; i < 25; i++) {
        if (strIndex < str.length) {
          arr[i][j] = str[strIndex];
          strIndex++;
        }
      }
    } else {
      for (let i = 24; i >= 0; i--) {
        if (strIndex < str.length) {
          arr[i][j] = str[strIndex];
          strIndex++;
        }
      }
    }
  }
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      if (arr[i][j] !== "*") {
        result += arr[i][j];
      }
    }
  }
  return result;
}
