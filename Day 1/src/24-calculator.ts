export {};

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function sum(arr: any): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function multiply(arr: number[]): number {
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    sum = sum * arr[i];
  }
  return sum;
}

function power(a: number, b: number): number {
  return Math.pow(a, b);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
