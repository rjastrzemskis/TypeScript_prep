export {};

function draw(number: number): void {
  let triangle = "";
  const string = "*";
  for (let i = 0; i < number; i++) {
    while (i < number) {
      triangle = triangle + string;
      console.log(triangle);
      i++;
    }
  }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/
draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
