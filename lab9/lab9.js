// Функция для нахождения наибольшего общего делителя (НОД)
function NOD(a, b) {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

// Функция для нахождения обратного по модулю числа
function Inverse(a, m) {
  a = a % m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) {
      return x;
    }
  }
  return 1; // На случай, если обратное не найдено (не должно случаться, если m простое число)
}

const backpackLength = 8;

const superSeq = [];
const publicKey = [];
const ascList = [];
const decAscList = [];
const message = [];
const encryptedMessage = [];
const decryptMessage = [];

// Функция для реверсирования строки
function Reverse(s) {
  return s.split("").reverse().join("");
}

const messageText = "Gurina Kristina Sergeevna";
let t0 = performance.now();
// Генерация сверхвозрастающей последовательности
let summary = 0;
for (let i = 0; i < backpackLength; i++) {
  summary = superSeq.reduce((acc, val) => acc + val, 0);
  superSeq.push(1 + summary);
}

// Вычисление n и a
const n = superSeq.reduce((acc, val) => acc + val, 0) + 1;
let a = 6;
while (NOD(n, a) !== 1) {
  a++;
}

// Генерация публичного ключа
for (const value of superSeq) {
  publicKey.push((a * value) % n);
}

console.log(
  "Закрытый ключ (сверхвозрастающая последовательность):",
  superSeq.join(" ")
);

console.log(`\nВозьмем числа a = ${a}, n = ${n}`);
console.log(
  `n > суммы элементов последовательности (${superSeq.reduce(
    (acc, val) => acc + val,
    0
  )})`
);

/////
const copiedArray = [...publicKey];
copiedArray.sort((x, y) => x - y);

console.log("\nПубличный ключ:", copiedArray.join(" "));
/////

console.log("\nИсходное сообщение:", messageText);

// Конвертация текста в ASCII и добавление в список ascList
for (const char of messageText) {
  const binary = char.charCodeAt(0).toString(2).padStart(8, "0");
  ascList.push(binary);
  //console.log(`${char} - ${binary}`);
}

// Шифрование сообщения
for (const item of ascList) {
  let z = 0;
  for (let i = 0; i < item.length; i++) {
    z += parseInt(item[i]) * publicKey[i];
  }
  encryptedMessage.push(z);
}
let t1 = performance.now();
console.log("\nЗашифрованное сообщение:", encryptedMessage.join(" "));
let t2 = performance.now();
// Дешифрование сообщения
const inverse = Inverse(a, n);
for (const item of encryptedMessage) {
  decryptMessage.push((inverse * item) % n);
}

superSeq.reverse(); // Реверсирование последовательности

// Дешифрование ASCII-бит
for (const item of decryptMessage) {
  let tmp = 0;
  let decAsc = "";
  for (const value of superSeq) {
    if (tmp + value <= item) {
      decAsc += "1";
      tmp += value;
    } else {
      decAsc += "0";
    }
  }
  decAscList.push(Reverse(decAsc));
}

console.log("\nASCII:", decAscList.join(" "));

console.log(
  "\nРасшифрованное сообщение:",
  decAscList.map((bin) => String.fromCharCode(parseInt(bin, 2))).join("")
);
let t3 = performance.now();
console.log("\nШифрование заняло: ", t1 - t0, "мс");
console.log("Дешифрование заняло: ", t3 - t2, "мс");
