export {};

const repeatString = (string: string, times: number): string => {
  let repeatedString = "";
  while (times > 0) {
    repeatedString = repeatedString + string;
    times--;
  }
  return repeatedString;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
