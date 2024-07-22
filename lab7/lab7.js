const PC1 = [
    57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35,
    27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46,
    38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4,
  ],
  PC2 = [
    14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27,
    20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56,
    34, 53, 46, 42, 50, 36, 29, 32,
  ],
  IP = [
    58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46,
    38, 30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8, 57, 49, 41, 33, 25, 17, 9,
    1, 59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47,
    39, 31, 23, 15, 7,
  ],
  E = [
    32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 12, 13, 12, 13, 14, 15,
    16, 17, 16, 17, 18, 19, 20, 21, 20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28,
    29, 28, 29, 30, 31, 32, 1,
  ],
  S = [
    [
      14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7, 0, 15, 7, 4, 14, 2,
      13, 1, 10, 6, 12, 11, 9, 5, 3, 8, 4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7,
      3, 10, 5, 0, 15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13,
    ],
    [
      15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10, 3, 13, 4, 7, 15, 2,
      8, 14, 12, 0, 1, 10, 6, 9, 11, 5, 0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6,
      9, 3, 2, 15, 13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9,
    ],
    [
      10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8, 13, 7, 0, 9, 3, 4,
      6, 10, 2, 8, 5, 14, 12, 11, 15, 1, 13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12,
      5, 10, 14, 7, 1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12,
    ],
    [
      7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15, 13, 8, 11, 5, 6, 15,
      0, 3, 4, 7, 2, 12, 1, 10, 14, 9, 10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14,
      5, 2, 8, 4, 3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14,
    ],
    [
      2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9, 14, 11, 2, 12, 4, 7,
      13, 1, 5, 0, 15, 10, 3, 9, 8, 6, 4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5,
      6, 3, 0, 14, 11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3,
    ],
    [
      12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11, 10, 15, 4, 2, 7, 12,
      9, 5, 6, 1, 13, 14, 0, 11, 3, 8, 9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10,
      1, 13, 11, 6, 4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13,
    ],
    [
      4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1, 13, 0, 11, 7, 4, 9,
      1, 10, 14, 3, 5, 12, 2, 15, 8, 6, 1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6,
      8, 0, 5, 9, 2, 6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12,
    ],
    [
      13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7, 1, 15, 13, 8, 10, 3,
      7, 4, 12, 5, 6, 11, 0, 14, 9, 2, 7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13,
      15, 3, 5, 8, 2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11,
    ],
  ],
  P = [
    16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10, 2, 8, 24, 14,
    32, 27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25,
  ],
  FINAL_IP = [
    40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14,
    54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60,
    28, 35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41,
    9, 49, 17, 57, 25,
  ],
  NUM_OF_LEFT_SHIFTS = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];

const chunkString = (str, len) =>
  str.match(new RegExp(".{1," + len + "}", "g"));

const hexToBin = (hex) =>
  ("00000000" + parseInt(hex, 16).toString(2)).substr(-8);

const decToBin = (dec) => ("0000" + parseInt(dec, 10).toString(2)).substr(-4);

const binToHex = (bin) => parseInt(bin, 2).toString(16);

// преобразует строку шестнадцатеричных символов в строку двоичных символов
const bin = (key) =>
  chunkString(key, 2)
    .map((hex) => hexToBin(hex))
    .join("");

//сдвигает строку на определенное количество символов
const shiftString = (str, shift) =>
  str.slice(shift, str.length) + str.slice(0, shift);

const keySchedule = (key) => {
  let subkeys = [];
  let perm = PC1.map((index) => key[index - 1]).join("");
  let C0 = perm.substr(0, perm.length / 2);
  let D0 = perm.substr(perm.length / 2);
  let prevC0 = C0,
    prevD0 = D0;
  NUM_OF_LEFT_SHIFTS.forEach((shift, i) => {
    C0 = shiftString(prevC0, shift);
    D0 = shiftString(prevD0, shift);
    prevC0 = C0;
    prevD0 = D0;
    let pair = C0 + D0;
    subkeys.push(PC2.map((index) => pair[index - 1]).join(""));
  });

  return subkeys;
};

//функция расширения
const expandBlock = (block) => E.map((index) => block[index - 1]).join("");

const stringXOR = (str1, str2, len) => {
  let xor = Array(len);
  for (let i = 0; i < len; i++) {
    xor[i] = str1[i] === str2[i] ? 0 : 1;
  }
  return xor.join("");
};

const sBoxOutput = (bits) => {
  return chunkString(bits, 6)
    .map((group, sBox) => {
      let row = parseInt(group[0] + group[5], 2);
      let col = parseInt(group.slice(1, 5), 2);
      return decToBin(S[sBox][16 * row + col]);
    })
    .join("");
};
//msg, key, subkeys
const avalancheEffect = (originalHex, key, key2, key3) => {
  let changedBits = 0;
  const encryptedText1 = convertHexToBinary(
    des3enc(originalHex, key, key2, key3)
  );
  let hexWithOneBitChanged = invertLastBitInHex(originalHex);
  const encryptedText2 = convertHexToBinary(
    des3enc(hexWithOneBitChanged, key, key2, key3)
  );
  for (let i = 0; i < encryptedText1.length; i++) {
    if (encryptedText1[i] !== encryptedText2[i]) {
      changedBits++;
    }
  }
  return (changedBits / encryptedText1.length) * 100;
};

const convertHexToBinary = (hex) => {
  let binaryString = "";
  for (let i = 0; i < hex.length; i++) {
    let hexCode = parseInt(hex[i], 16).toString(2);
    hexCode = hexCode.length < 4 ? hexCode.padStart(4, "0") : hexCode;
    binaryString += hexCode;
  }

  return binaryString;
};

const invertLastBitInHex = (hex) => {
  let binaryString = convertHexToBinary(hex);
  let lastBit = binaryString[binaryString.length - 1];
  let invertedBit = lastBit === "0" ? "1" : "0";
  binaryString = binaryString.slice(0, -1) + invertedBit;

  return binaryToHex(binaryString);
};

const binaryToHex = (binary) => {
  let hexString = "";
  for (let i = 0; i < binary.length; i += 4) {
    let binSegment = binary.slice(i, i + 4);
    let hexDigit = parseInt(binSegment, 2).toString(16);
    hexString += hexDigit;
  }

  return hexString;
};

const des = (msg, key, subkeys) => {
  let perm = IP.map((index) => msg[index - 1]).join(""); // init permute (IP)
  let L0 = perm.substr(0, perm.length / 2);
  let R0 = perm.substr(perm.length / 2);

  let prevL0 = L0,
    prevR0 = R0;

  for (let i = 0; i < 16; i++) {
    L0 = prevR0;

    let sBoxOut = sBoxOutput(stringXOR(subkeys[i], expandBlock(R0), 48));
    let finalPerm = P.map((index) => sBoxOut[index - 1]).join("");
    R0 = stringXOR(prevL0, finalPerm, 32);
    prevL0 = L0;
    prevR0 = R0;
  }
  let pair = R0 + L0;
  let enc = FINAL_IP.map((index) => pair[index - 1]).join("");
  return chunkString(enc, 4).map(binToHex).join("").toUpperCase();
};

const invertLastBit = (binaryString) => {
  const lastBit = binaryString[binaryString.length - 1];
  const invertedLastBit = lastBit === "0" ? "1" : "0";
  return binaryString.slice(0, -1) + invertedLastBit;
};

const encode = (msg, key) => des(msg, key, keySchedule(key));
const decode = (msg, key) => des(msg, key, keySchedule(key).reverse());

let msgTxt = "efeef1ebe5e4f1f2";
let key = bin("caf0e8f1f2e8ede0"); // Кристина
let key2 = bin("c3f3f0e8ede0eaf0"); //Гуринакр
let key3 = bin("d1e5f0e3e5e5e2ed"); //Сергеевн
let msg = bin(msgTxt); // последст

let des3enc = (msg, key1, key2, key3) => {
  let tripleEnc = encode(msg, key1);
  tripleEnc = decode(bin(tripleEnc), key2);
  tripleEnc = encode(bin(tripleEnc), key3);
  return tripleEnc;
};

let encod = des3enc(msg, key, key2, key3);
console.log("encoding des3-ede: " + encod);

let des3dec = (enc, key1, key2, key3) => {
  let tripleDec = decode(bin(enc), key3);
  tripleDec = encode(bin(tripleDec), key2);
  tripleDec = decode(bin(tripleDec), key1);
  return tripleDec;
};

let decod = des3dec(encod, key, key2, key3);
console.log("decoding des3-ede: " + decod);
console.log("Исходное сообщение: " + msgTxt.toUpperCase());
const avalanche = avalancheEffect(msg, key, key2, key3);
console.log("Лавинный эффект: " + avalanche + "%");

console.log("-------------- слабые ключи---------------------");
let keyW = bin("0101010101010101");
let keyW2 = bin("1F1F1F1F0E0E0E0E");
let keyW3 = bin("E0E0E0E0F1F1F1F1");
console.log("Исходное сообщение: " + msgTxt.toUpperCase());

let encod2 = des3enc(msg, keyW, keyW2, keyW3);
console.log("encoding des3-ede слабый ключ: " + encod2);
let decod2 = des3dec(encod2, keyW, keyW2, keyW3);
console.log("decoding des3-ede слабый ключ: " + decod2);

const avalanche2 = avalancheEffect(msg, keyW, keyW2, keyW3);
console.log("Лавинный эффект: " + avalanche2 + "%");

console.log("----------------- полуслабые ключи ----------------------");
let keyWH = bin("01FFE01FFE01FFE0");
let keyW2H = bin("01FFE01FFE01FFE0");
let keyW3H = bin("01FFE01FFE01FFE0");
console.log("Исходное сообщение: " + msgTxt.toUpperCase());

let encod2H = des3enc(msg, keyWH, keyW2H, keyW3H);
console.log("encoding des3-ede слабый ключ: " + encod2H);
let decod2H = des3dec(encod2H, keyWH, keyW2H, keyW3H);
console.log("decoding des3-ede слабый ключ: " + decod2H);

const avalanche2H = avalancheEffect(msg, keyWH, keyW2H, keyW3H);
console.log("Лавинный эффект: " + avalanche2H + "%");
