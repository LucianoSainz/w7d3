export function toCurrency(value) {
  return value + " eur";
}

export function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
