const fs = require('fs');

let textASCII = fs.readFileSync('./txt1.txt');
let textBase64 = fs.readFileSync('./encodedFile.txt');

const regExpSimbols = /[ |,|;|:|\/|'|.|~|"|(|)|=|-|—|^|?|*|&|%|$|#|!|@|+|\||<|>|\\|\r|\n|\t]/g;

textASCII = textASCII.toString().replace(regExpSimbols, '');
textBase64 = textBase64.toString().replace(regExpSimbols, '');

function GetEntropyShanon(text) {
    let frequency = {};
    for(let i = 0; i < text.length; i++) {
        let char = text[i];
        if(frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    let entropy = 0;
    for(let char in frequency) {
        //console.log(`Символ: ${char}, Частота: ${frequency[char]}`);
        let p = frequency[char] / text.length;
        entropy -= p * Math.log2(p);
    }
    return entropy;
}

// энтропия Хартли
function GetEntropyHartley(text) {
    let alphabetSize = new Set(text).size;
    return Math.log2(alphabetSize);
}  


//1
function encodeFile() {
    const fileInput = document.getElementById('fileInput');
    const resultElement = document.getElementById('result');

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const base64String = btoa(e.target.result);
            resultElement.textContent = base64String;
            saveToFile(base64String, 'encodedFile.txt');
        };

        reader.readAsBinaryString(file);
    } else {
        resultElement.textContent = 'Please choose a file.';
    }
    return base64String;
}

function saveToFile(data, fileName) {
    const blob = new Blob([data], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}

//2 задание
function calculateRedundancy(text) {
    return (1 - GetEntropyShanon(text) / GetEntropyHartley(text)) * 100;
}

//2 частоты символов
function Get(text) {
    let frequency = {};
    for(let i = 0; i < text.length; i++) {
        let char = text[i];
        if(frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    for(let char in frequency) {
        console.log(`Символ: ${char}, Частота: ${frequency[char]}`);
    }
}

//3 задание
function asciiToBinary(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let binaryChar = '';
        let value = text[i].charCodeAt(0);
        for (let j = 7; j >= 0; j--) {
            binaryChar += (value & (1 << j)) ? '1' : '0';
        }
        result += binaryChar;
    }
    return result;
}

function base64ToBinary(base64) {
    const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let binary = '';

    for (let i = 0; i < base64.length; i += 4) {   
        let bits24 = 0;

        for (let j = 0; j < 4; j++) {
            if (i + j < base64.length) {
                let index = base64Chars.indexOf(base64[i + j]);
                bits24 += index << ((3 - j) * 6);
            }
        }

        binary += (bits24 >>> 16).toString(2).padStart(8, '0');
        if (base64[i + 2] !== '=') {
            binary += ((bits24 >>> 8) & 0xFF).toString(2).padStart(8, '0');
        }

        if (base64[i + 3] !== '=') {
            binary += (bits24 & 0xFF).toString(2).padStart(8, '0');
        }
    }
    return binary;
}


function GetXor(name, surname, flag) {
    let str1 = "";
    let str2 = "";

    if (flag === 1) {
        str1 = base64ToBinary(name);
        str2 = base64ToBinary(surname);
    } 
    else {
        str1 = asciiToBinary(name);
        str2 = asciiToBinary(surname);
    }
    
    while(str1.length != str2.length) {
        if (str1.length > str2.length)
            str2 += "0";
        else
            str1 += "0";
    }
    
    let xorResult = "";
    for (let i = 0; i < str1.length; i++) {
        xorResult += str1[i] === str2[i] ? "0" : "1";
    }

    return xorResult;
}




//штука из практикума
function base64_encode (s) 
{ 
 var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; 
 var r = ""; 
 var p = ""; 
 var c = s.length % 3; 

 if (c > 0) { 
    for (; c < 3; c++) { 
        p += '='; 
        s += "\0"; 
    } 
 } 

    for (c = 0; c <s.length; c += 3) { 
    // we add newlines after every 76 output characters, according to 
   //the MIME specs 
        if (c > 0 && (c / 3 * 4) % 76 == 0) { 
            r += "\r\n"; 
        } 
        var n = (s.charCodeAt(c) << 16) + (s.charCodeAt(c+1) << 8) + s.charCodeAt(c+2); 
        n = [(n >>> 18) & 63, (n >>> 12) & 63, (n >>> 6) & 63, n & 63]; 
        r += base64chars[n[0]] + base64chars[n[1]] + base64chars[n[2]] + base64chars[n[3]]; 
    } 

    return r.substring(0, r.length - p.length) + p; 
} 


// Выводы:
console.log(`\n-----------------Задание 1---------------`);
console.log(`\n-----------------Задание 2---------------`);
console.log(`Частотные свойства: `); Get(textASCII)
console.log(`Частотные свойства(base64):`);Get(textBase64)


console.log(`Энтропия по Шеннону: ${GetEntropyShanon(textASCII)}`);
console.log(`Энтропия по Шеннону(base64): ${GetEntropyShanon(textBase64)}`);

console.log(`Энтропия по Хартли : ${GetEntropyHartley(textASCII)}`);
console.log(`Энтропия по Хартли(base64): ${GetEntropyHartley(textBase64)}`);

console.log(`Избыточность: ${calculateRedundancy(textASCII)}`);
console.log(`Избыточность(base64): ${calculateRedundancy(textBase64)}`);

console.log(`\n-----------------Задание 3---------------`);
console.log(`xor: ${GetXor('Kristina', 'Gurina', 0)}`);
console.log(`xor(base64): ${GetXor(base64_encode('Kristina'), base64_encode('Gurina'), 1)}`);



function displayResults() {
    const entropyShanonASCII = GetEntropyShanon(textASCII);
    const entropyShanonBase64 = GetEntropyShanon(textBase64);

    const entropyHartleyASCII = GetEntropyHartley(textASCII);
    const entropyHartleyBase64 = GetEntropyHartley(textBase64);

    const redundancyASCII = calculateRedundancy(textASCII);
    const redundancyBase64 = calculateRedundancy(textBase64);

    const xorResult = GetXor('Kristina', 'Gurina', 0);
    const xorResultBase64 = GetXor(base64_encode('Kristina'), base64_encode('Gurina'), 1);

    const outputDiv = document.getElementById('print');
    outputDiv.textContent = 'Please choose a file.';
    outputDiv.innerHTML = `
        <p>Энтропия по Шеннону (ASCII): ${entropyShanonASCII}</p>
        <p>Энтропия по Шеннону (base64): ${entropyShanonBase64}</p>

        <p>Энтропия по Хартли (ASCII): ${entropyHartleyASCII}</p>
        <p>Энтропия по Хартли (base64): ${entropyHartleyBase64}</p>

        <p>Избыточность (ASCII): ${redundancyASCII}</p>
        <p>Избыточность (base64): ${redundancyBase64}</p>

        <p>xor: ${xorResult}</p>
        <p>xor (base64): ${xorResultBase64}</p>
    `;
}

function eFile() {
    const fileInput = document.getElementById('print');
    const resultElement = document.getElementById('print');

    resultElement.textContent = 'base64String';
}

