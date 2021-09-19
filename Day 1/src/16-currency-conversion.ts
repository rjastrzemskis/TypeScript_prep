export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY (don't repeat yourself) principle)
 */

function convertoforgcur(price: number, currencyrate: number): string {
  return (price * currencyrate * fee).toFixed(2);
}
// You are allowed to change this function
function convertToUSD(price: number): string {
  return convertoforgcur(price, exchtodolrate);
}
// You are allowed to change this function
function convertToBRL(price: number): string {
  return convertoforgcur(price, exchtobrlrate);
}

const fee = 1.01;
const exchtodolrate = 1.4;
const exchtobrlrate = 5.7;
const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
