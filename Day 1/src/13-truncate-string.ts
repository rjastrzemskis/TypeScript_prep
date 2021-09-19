export {};

function truncateString(nosaukums: string, skaits: number): string {
  return nosaukums.slice(0, skaits);
}

console.log(truncateString("Helloworld", 5));
