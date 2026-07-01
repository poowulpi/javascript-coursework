// Create an array of five book objects
const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310
  },
  {
    title: "Charlotte's Web",
    author: "E.B. White",
    pages: 192
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    pages: 309
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281
  }
];

// Loop through the array and print books with more than 200 pages
for (let i = 0; i < books.length; i++) {
  if (books[i].pages > 200) {
    console.log(
      books[i].title +
      " by " +
      books[i].author +
      " (" +
      books[i].pages +
      " pages)"
    );
  }
}