export {};

function onlyTheAces(arr: string[]): string[] {
  let aces = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Ace") {
      aces.push(arr[i]);
    }
  }
  return aces;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
