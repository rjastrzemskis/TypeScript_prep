export {};

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris",
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris",
  },
];

const getTheTitles = (books) => {
  books.forEach((book) => {
    console.log(book.title); //gadriz lidz galam
  });
};

getTheTitles(books); // Expected output: ['4 hour work week', 'Tools of Titans']
