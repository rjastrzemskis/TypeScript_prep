/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

const VOWELS = "aeuoi".split("");
function vowels(s: string): number {
  return s
    .toLowerCase()
    .split("")
    .reduce((previousValue, letter) => {
      if (VOWELS.indexOf(letter) > -1) {
        return previousValue + 1;
      }
      return previousValue;
    }, 0);
}

export { vowels };
