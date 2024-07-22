function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

//для получения начального состояния
function modInverse(a, m) {
  //Проверяет, является ли a и m взаимно простыми
  if (gcd(a, m) != 1) {
    return -1;
  } else {
    let mo = m,
      y = 0,
      x = 1;
    if (m == 1) {
      return 0;
    }
    while (a > 1) {
      let quo = a / m;
      let t = m;
      m = a % m;
      a = t;
      t = y;
      y = x - quo * y;
      x = t;
    }
    if (x < 0) {
      x += mo;
    }
    return x;
  }
}

function BBS(p, q, n) {
  let M = p * q;
  let seed = Math.floor(Math.random() * M);
  let state = modInverse(seed, M);
  let bits = [];
  for (let i = 0; i < n; i++) {
    state = (state * state) % M;
    bits.push(state & 1);
  }
  return bits;
}

function generateBBS() {
  let p = document.getElementById("p").value;
  let q = document.getElementById("q").value;
  let n = 256;
  let result = BBS(p, q, n);

  const formattedOutput = convertToDecimalGroups(result);
  document.getElementById("output").value = formattedOutput;
}

function convertToDecimalGroups(binaryArray) {
  const binaryStr = binaryArray.join("");
  const segmentLength = 8;
  const decimalGroups = [];

  // Разделяем строку на группы по 8 битов и конвертируем каждую в десятичное число
  for (let i = 0; i < binaryStr.length; i += segmentLength) {
    const binarySegment = binaryStr.slice(i, i + segmentLength);
    const decimalValue = parseInt(binarySegment, 2); // преобразование в десятичное
    decimalGroups.push(decimalValue);
  }

  return decimalGroups.join(", ");
}
