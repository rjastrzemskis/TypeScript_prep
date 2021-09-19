export {};

const count = (arr: string, word: string): number => {
  let res = arr.toLowerCase().split(" ");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (res[i] === word) {
      count = count + 1;
    }
  }
  return count;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
