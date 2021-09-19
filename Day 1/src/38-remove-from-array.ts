export {};

const removeFromArray = function (
  firstArray: number[],
  ...toRemove: number[]
): number[] {
  for (let i = 0; i < toRemove.length; i++) {
    let index = firstArray.indexOf(toRemove[i]);
    if (index === -1) continue;
    firstArray.splice(index, 1);
  }
  return firstArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]
