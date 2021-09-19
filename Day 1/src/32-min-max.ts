export {};

const min = (array: number[]): number => {
  return Math.min.apply(Math, array);
};

const max = (array: number[]): number => {
  return Math.max.apply(Math, array);
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
