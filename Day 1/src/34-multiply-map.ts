export {};

/**
 * Implement map function which works similarly as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const numbers = [1, 2, 3];
const map = numbers.map((x: number): number => x * 2);
console.log(map); // Expected result: [2, 4, 6]
