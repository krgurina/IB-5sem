function KSA(key) {
  let key_length = key.length;
  let S = Array.from({ length: 256 }, (_, i) => i);
  let j = 0;
  for (let i = 0; i < 256; i++) {
    j = (j + S[i] + key[i % key_length]) % 256;
    [S[i], S[j]] = [S[j], S[i]];
  }
  return S;
}

function PRGA(S) {
  let i = 0;
  let j = 0;
  return function () {
    i = (i + 1) % 256;
    j = (j + S[i]) % 256;
    [S[i], S[j]] = [S[j], S[i]];
    return S[(S[i] + S[j]) % 256];
  };
}

function RC4(key) {
  let S = KSA(key);
  let rand = PRGA(S);
  return function (len) {
    return Array.from({ length: len }, () => rand());
  };
}

function encrypt() {
  let key = [43, 45, 100, 21, 1];
  let message = document.getElementById("message").value;
  let rc4 = RC4(key);
  let encrypted = rc4(message.length)
    .map((byte, i) => byte ^ message.charCodeAt(i))
    .join(",");
  document.getElementById("output").value = encrypted;
}
