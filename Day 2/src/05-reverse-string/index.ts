/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string): string {
  let result = "";
  for (let index = str.length - 1; index >= 0; index--) {
    result += str[index];
  }
  return result;
}

export { reverse };
