export {};

function getnumber(): number {
  return Math.random() * 10;
}

const result = getnumber(); // call the function created above and put the result inside the variable
console.log(result); // Expected output: {random number}
