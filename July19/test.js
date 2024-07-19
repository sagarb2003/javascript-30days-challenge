//Activity 1:
//Task-1
const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  year: 2000,
  data: function () {
    console.log(`${this.title} ${this.year}`);
  },
};
console.log(book);
//Task-2
console.log(book.title);
console.log(book["author"]);

//Activity 2

//Task-3
// console.log(book.data());
function bookData(obj) {
  return `Book Title: ${obj.title} Book Author: ${obj.author}`;
}
console.log(bookData(book));

//Task-4
function updateYear(year, obj) {
  obj["year"] = year;
}
updateYear(2003, book);
console.log(book);

//Activity 3
//Task 5
const library = {
  name: "ABC",
  books: [
    {
      title: "Harry Potter",
      author: "JK Rowling",
      year: "2000",
    },
    {
      title: "Sagar",
      author: "JK Rowling",
      year: "2000",
    },
  ],
};
console.log(library);
//Task 6
console.log(library.name);
const n = library["books"].length;
console.log("Title Of all books");
for (let i = 0; i < n; i++) {
  console.log(library["books"][i].title);
}

//Activity 4
//Task-7
book.data();

//Activity-5
//Task-8
for (const key in book) {
  console.log(`${key}: ${book[key]}`);
}
//Task-9
console.log(Object.keys(book));
console.log(Object.values(book));
