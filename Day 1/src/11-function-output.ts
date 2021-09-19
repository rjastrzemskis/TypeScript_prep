export {};

function concatenate(
  firstWord: string,
  secondWord: string,
  thirdWord: string
): string {
  return firstWord + " " + secondWord + " " + thirdWord;
}

const result = concatenate("Hello", "from", "CODELEX");
console.log(result); // Expected output: "Hello from CODELEX"
