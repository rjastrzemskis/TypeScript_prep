/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number): void {
  for (let i = 1; i <= n; i++) {
    const space = " ".repeat(n - i);
    const str = "#".repeat(i * 2 - 1);
    console.log(space + str + space);
  }
}

export { pyramid };
