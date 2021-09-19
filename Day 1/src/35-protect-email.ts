export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(email: string): void {
  let hide = email.split("@")[0].length - 3;
  let regex = new RegExp(".{" + hide + "}@"); //mazliet nesapratu
  email = email.replace(regex, "...@");
  console.log(email);
}
protectEmail("secret123@codelex.io"); // Expected result: sec...@codelex.io
protectEmail("example@example.com"); // Expected result: exa...@example.com
