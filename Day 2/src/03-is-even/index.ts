/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

const EVEN_NUMBERS = ["0", "2", "4", "6", "8"];

function isEven(n: number): boolean {
  const integer = n.toString().split(".")[0];
  const lastChar = integer.toString().charAt(integer.toString().length - 1);
  return EVEN_NUMBERS.indexOf(lastChar) > -1;
}
export { isEven };
