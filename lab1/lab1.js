const fs = require('fs');

let textBel = fs.readFileSync('./txt1.txt');
let textEnglish = fs.readFileSync('./txt2.txt');
let secondTask = fs.readFileSync('./txt3.txt');

const regExpSimbols = /[ |0-9|,|;|:|\/|'|.|~|"|(|)|=|-|—|^|?|*|&|%|$|#|!|@|+|\||<|>|\\|\r|\n|\t]/g;

const alfabhetBelorussian = 'абвгдеёжзійклмнопрстуўфхцчшыьэюя';
const alfabhetEnglish = 'abcdefghijklmnopqrstuvwxyz';
const alfabhetBinary = '01';

textBel = textBel.toString().toLowerCase().replace(regExpSimbols, '');
textEnglish = textEnglish.toString().toLowerCase().replace(regExpSimbols, '');


//1 Энтропия Шеннона
function GetEntropyShanon(str, alphabet) {
  let entropy = 0; 
  for (let i = 0; i < alphabet.length; i++) {
    let symbol = alphabet.charAt(i); 
    let regex = new RegExp(symbol, 'g'); 
    let probability;
    if (str.match(regex) === null) {
      probability = 0;
    } else {
      probability = str.match(regex).length / str.length;
    }
    //console.log(`Symbol: '${symbol}', P(${symbol}) = ${probability}`);
    if (probability !== 0) {
      entropy += probability * Math.log2(probability);
    }
  }
  return -entropy;
}

// энтропия Хартли
function GetEntropyHartley(n) {
  return Math.log2(n);
}  

//3
let FIOBe = "Гурина Кристтина Сергеевна";
let FIOla = "Gurina Kristina Sergeevna";
const FIOBel = FIOBe.toLowerCase().replace(regExpSimbols, ''); 
const FIOEng = FIOla.toLowerCase().replace(regExpSimbols, ''); 

function convbinary(txt) {
  let str = "";
  for (let i = 0; i < txt.length; i++) {
    str += txt[i].charCodeAt(0).toString(2);
  }
  return str;
}

//4
function EffectiveEntropy(someNumber, str, alphabet) {
  const p = someNumber;
  const q = 1 - p;
  const h = (-p * Math.log2(p) - q * Math.log2(q)) || 0; 
  return (GetEntropyShanon(str, alphabet) - h);
}

function EffectiveEntropyBin(someNumber) {
  const p = someNumber;
  const q = 1 - p;
  const h = (-p * Math.log2(p) - q * Math.log2(q)) || 0; 
  return (1 - h);
}

// Выводы:
console.log(`\n-----------------Задание 1---------------`);
console.log(`Длина текста = ${textBel.length}`);
console.log(`Энтропия по Шеннону(бел.): ${GetEntropyShanon(textBel, alfabhetBelorussian)}`);
console.log(`Энтропия по Хартли(бел.): ${GetEntropyHartley(alfabhetBelorussian.length)}`);
console.log(`Энтропия по Шеннону(англ.): ${GetEntropyShanon(textEnglish, alfabhetEnglish)}`);
console.log(`Энтропия по Хартли(англ.): ${GetEntropyHartley(alfabhetEnglish.length)}`);

console.log(`\n-----------------Задание 2---------------`);
console.log('Энтропия бинарного алфавита:', GetEntropyShanon(secondTask.toString(), alfabhetBinary));

console.log(`\n-----------------Задание 3---------------`);
console.log(`Количество информации (бел.): ${FIOBel.length * GetEntropyShanon(FIOBel, alfabhetBelorussian)}`);
console.log(`Количество информации (binary): ${convbinary(FIOBel).length * GetEntropyShanon(convbinary(FIOBel), alfabhetBinary)}`);
console.log(`Количество информации (англ.): ${FIOEng.length * GetEntropyShanon(FIOEng, alfabhetEnglish)} `);
console.log(`Количество информации (binary): ${convbinary(FIOEng).length * GetEntropyShanon(convbinary(FIOEng), alfabhetBinary)}`);


console.log(`\n-----------------Задание 4---------------`);
console.log("ФИО(бел.) при 0,1", EffectiveEntropy(0.1, FIOBel, alfabhetBelorussian));
console.log("ФИО(бел.) при 0,5", EffectiveEntropy(0.5, FIOBel, alfabhetBelorussian));
console.log("ФИО(бел.) при 1",   EffectiveEntropy(1.0, FIOBel, alfabhetBelorussian));

console.log("ФИО(англ.) при 0,1", EffectiveEntropy(0.1, FIOEng, alfabhetEnglish));
console.log("ФИО(англ.) при 0,5", EffectiveEntropy(0.5, FIOEng, alfabhetEnglish));
console.log("ФИО(англ.) при 1",   EffectiveEntropy(1.0, FIOEng, alfabhetEnglish));

console.log("ФИО(binary) при 0,1", EffectiveEntropyBin(0.1));
console.log("ФИО(binary) при 0,5", EffectiveEntropyBin(0.5));
console.log("ФИО(binary) при 1",   EffectiveEntropyBin(1.0));





