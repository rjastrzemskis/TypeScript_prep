export {};
function stringToArray([arr]: string[]): string[] {
  return arr.split(/(?=[A-Z])/);
}

console.log(stringToArray(["JohnDoe"])); // Expected output: ['John', 'Doe']
