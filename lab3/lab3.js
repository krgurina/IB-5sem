//1
function NOD() {
  if (arguments.length === 2) {
    let a = arguments[0];
    let b = arguments[1];
    while (b != 0) {
      let t = a % b;
      a = b;
      b = t;
    }
    console.log(`НОД (${arguments[0]}, ${arguments[1]})= ${a}`);
    return a;
  } else if (arguments.length === 3) {
    let a = arguments[0];
    let b = arguments[1];
    let c = arguments[2];
    let res = NOD(NOD(a, b), c);
    console.log(
      `НОД (${arguments[0]}, ${arguments[1]}, ${arguments[2]})= ${res}`
    );
    return res;
  } else {
    console.log("Функция NOD принимает 2 или 3 аргумента");
    return 0;
  }
}

function GetPrimeNumbers(param1, param2) {
  let start, end;
  if (arguments.length === 1) {
    start = 2;
    end = param1;
  } else if (arguments.length === 2) {
    start = param1;
    end = param2;
  } else {
    console.log("Функция GetPrimeNumbers принимает 1 или 2 аргумента");
  }

  const numbers = new Array(end + 1).fill(true);
  numbers[0] = numbers[1] = false;

  for (let i = 2; i <= Math.sqrt(end); i++) {
    if (numbers[i]) {
      for (let j = i * i; j <= end; j += i) {
        numbers[j] = false;
      }
    }
  }

  const primeNumbers = [];
  for (let i = start; i <= end; i++) {
    if (numbers[i]) {
      primeNumbers.push(i);
    }
  }

  console.log(
    `Простые числа в интервале [${start}, ${end}]: ${primeNumbers.join(", ")}`
  );
  return primeNumbers;
}

function countPrimesInRange(param1, param2) {
  let start, end, primeNumbers;
  if (arguments.length === 1) {
    start = 2;
    end = param1;
    primeNumbers = GetPrimeNumbers(end);
  } else if (arguments.length === 2) {
    start = param1;
    end = param2;
    primeNumbers = GetPrimeNumbers(start, end);
  } else {
    console.log("Функция countPrimesInRange принимает 1 или 2 аргумента");
  }

  const numPrimes = primeNumbers.length;
  const lnN = Math.log(end);
  const nOverLnN = end / lnN;

  console.log(
    `Количество простых чисел в интервале [${start}, ${end}]: ${numPrimes}`
  );
  console.log(`Значение n/ln(n) при n = ${end}: ${nOverLnN}`);
}

function mul(a) {
  let result = "";
  let num = a;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    while (num % i === 0) {
      result += `${i} * `;
      num /= i;
    }
  }
  if (num > 1) {
    result += `${num}`;
  } else {
    result = result.slice(0, -3);
  }
  return result;
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

let m = 367;
let n = 401;

console.log("1 задание");
countPrimesInRange(n);

console.log("2 задание");
countPrimesInRange(m, n);

console.log("3 задание");
console.log(mul(n));
console.log(mul(m));
console.log(mul(1234));

console.log("4 задание");
var concatenatedNumber = parseInt(n.toString() + m.toString());
var concatenatedNumber2 = parseInt(m.toString() + n.toString());

console.log(
  `Число ${concatenatedNumber} Простое? ${isPrime(concatenatedNumber)}`
);
console.log(
  `Число ${concatenatedNumber2} Простое? ${isPrime(concatenatedNumber2)}`
);

console.log("5 задание");
NOD(n, m);
NOD(333, 100);
NOD(56, 200);
NOD(21, 43, 342);

GetPrimeNumbers(n);
GetPrimeNumbers(m, n);

// n/ln(n), потому что n/ln(n) представляет собой приблизительное количество простых чисел в этом интервале согласно распределению простых чисел
