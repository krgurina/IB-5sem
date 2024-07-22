function BBS(p, q) {
  let n = p * q;
  let seed = Math.floor(Math.random() * n);
  let state = (seed * seed) % n;

  return function () {
    state = (state * state) % n;
    return state / n; // Нормализация результата в диапазоне [0, 1)
  };
}

let generator = BBS(11, 19); // Выберите два простых числа
console.log(generator()); // Выводит псевдослучайное число
