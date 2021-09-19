/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]): number {
  let biggest = array[0],
    nextbiggest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > biggest) {
      nextbiggest = biggest;
      biggest = array[i];
    } else if (array[i] > nextbiggest && array[i] != biggest)
      nextbiggest = array[i];
  }
  return nextbiggest;
}

export { secondLargest };
