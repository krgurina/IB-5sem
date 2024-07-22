const fs = require("fs");
const keyword = "GURINA";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const inputFile = "E:\\univer\\IB\\lab4\\origin.txt";
const encryptedOutputFile = "E:\\univer\\IB\\lab4\\coded.txt";
const decryptedOutputFile = "E:\\univer\\IB\\lab4\\decoded.txt";

const encryptedOutputFile2 = "E:\\univer\\IB\\lab4\\coded2.txt";
const decryptedOutputFile2 = "E:\\univer\\IB\\lab4\\decoded2.txt";

function createSubstitutionAlphabet(keyword) {
  const keyUnique = [...new Set(keyword.toUpperCase())];
  const substitutionAlphabet =
    keyUnique.join("") +
    alphabet
      .split("")
      .filter((char) => !keyUnique.includes(char))
      .join("");
  return substitutionAlphabet;
}

function encrypt(text, keyword) {
  const substitutionAlphabet = createSubstitutionAlphabet(keyword);
  return text
    .toUpperCase()
    .split("")
    .map((char) => {
      const index = alphabet.indexOf(char);
      return index !== -1 ? substitutionAlphabet[index] : char;
    })
    .join("");
}

function decrypt(text, keyword) {
  const substitutionAlphabet = createSubstitutionAlphabet(keyword);
  return text
    .toUpperCase()
    .split("")
    .map((char) => {
      const index = substitutionAlphabet.indexOf(char);
      return index !== -1 ? alphabet[index] : char;
    })
    .join("");
}

function encryptFile(inputFile, outputFile, keyword) {
  const text = fs.readFileSync(inputFile, "utf8");
  const encryptedText = encrypt(text, keyword);
  console.log(probability(text, alphabet));
  console.log(`[ШИФР ЦЕЗАРЯ]Зашифрованный текст сохранен в файл`);
  console.log(probability(encryptedText, alphabet));
  fs.writeFileSync(outputFile, encryptedText);
}

function decryptFile(inputFile, outputFile, keyword) {
  const text = fs.readFileSync(inputFile, "utf8");
  const decryptedText = decrypt(text, keyword);
  console.log(`[ШИФР ЦЕЗАРЯ]Расшифрованный текст сохранен в файл`);
  fs.writeFileSync(outputFile, decryptedText);
}

let t0 = performance.now();
encryptFile(inputFile, encryptedOutputFile, keyword);
let t1 = performance.now();
console.log("[ШИФР ЦЕЗАРЯ Кодирование]", t1 - t0, "мс");
let t2 = performance.now();
decryptFile(encryptedOutputFile, decryptedOutputFile, keyword);
let t3 = performance.now();
console.log("[ШИФР ЦЕЗАРЯ Раскодирование]", t3 - t2, "мс");

//2 задание

const trisemusTable = [
  ["K", "R", "I", "S"],
  ["T", "N", "A", "B"],
  ["C", "D", "E", "F"],
  ["G", "H", "J", "L"],
  ["M", "O", "P", "Q"],
  ["U", "V", "W", "X"],
  ["Y", "Z", "+", "-"],
];

function encodeDecodeText(text, isEncoding) {
  const result = [];
  const encodeDecodeChar = (char) => {
    for (let row = 0; row < trisemusTable.length; row++) {
      const col = trisemusTable[row].indexOf(char);
      if (col !== -1) {
        if (isEncoding) {
          const newRow = (row + 1) % trisemusTable.length;
          return trisemusTable[newRow][col];
        } else {
          const newRow =
            (row - 1 + trisemusTable.length) % trisemusTable.length;
          return trisemusTable[newRow][col];
        }
      }
    }
    return char;
  };

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toUpperCase();
    const encodedChar = encodeDecodeChar(char);
    result.push(encodedChar);
  }

  return result.join("");
}

function encryptFile2(inputFile, outputFile) {
  const text = fs.readFileSync(inputFile, "utf8");
  const encryptedText = encodeDecodeText(text, true);
  //console.log(probability(text, alphabet));
  console.log(`[ТАБЛИЦА ТРИСЕМУСА]Зашифрованный текст сохранен в файл`);
  //console.log(probability(encryptedText, alphabet));
  fs.writeFileSync(outputFile, encryptedText);
}
function decryptFile2(inputFile, outputFile) {
  const text = fs.readFileSync(inputFile, "utf8");
  const decryptedText = encodeDecodeText(text, false);
  console.log(`[ТАБЛИЦА ТРИСЕМУСА]Расшифрованный текст сохранен в файл`);

  fs.writeFileSync(outputFile, decryptedText);
}

let t4 = performance.now();
encryptFile2(inputFile, encryptedOutputFile2);
let t5 = performance.now();
console.log("[ТАБЛИЦА ТРИСЕМУСА Раскодирование]", t5 - t4, "мс");
let t6 = performance.now();
decryptFile2(encryptedOutputFile2, decryptedOutputFile2);
let t7 = performance.now();
console.log("[ТАБЛИЦА ТРИСЕМУСА Раскодирование]", t7 - t6, "мс");

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
