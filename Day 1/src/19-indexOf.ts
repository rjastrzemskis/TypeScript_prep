export {};

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function

function remove(
  arr: number[] | string[],
  valueToRemove: number | string
): number[] | string[] {
  //apzimējums jālabo , slikts kods
  let index = arr.indexOf(valueToRemove);
  arr.splice(index, 1);
  return arr;
}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];
const numberscopy = [...numbers];
const namescopy = [...names];

const newNumbers = remove(numberscopy, 2);
const newNames = remove(namescopy, "Ellen");

console.log(newNumbers);
console.log(newNames);
console.log(numbers);
console.log(names);

/*
  Expected output:

      [1, 3]
      [John, Alice]
*/
