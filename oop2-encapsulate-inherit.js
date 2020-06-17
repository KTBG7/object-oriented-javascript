/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 

    //your code here...
    */
class Book {
  #author;
  #publisher;
  constructor(author, publisher) {
    this.#author = author;
    this.#publisher = publisher;
  }
  get author() {
    return this.#author;
  }
  set author(newAuthor) {
    this.#author = newAuthor;
    return this;
  }
  get publisher() {
    return this.#publisher;
  }
  set publisher(newPublisher) {
    this.#publisher = newPublisher;
    return this;
  }
  info() {
    console.log(`${this.#author} is the author of this book!`);
    console.log(`${this.#publisher} is the publisher of this book!`);
  }
}
let theFunBook = new Book("Kevin", "Amazon");
theFunBook.publisher = "Disney";
theFunBook.info();
class Author {
  #author;
  #book;
  constructor(author, book) {
    this.#author = author;
    this.#book = book;
  }
  get author() {
    return this.#author;
  }
  set author(newAuthor) {
    this.#author = newAuthor;
    return this;
  }
  get book() {
    return this.#book;
  }
  set book(newBook) {
    this.#book = newBook;
    return this;
  }
  info() {
    console.log(`This author is ${this.#author} and his book is ${this.#book}`);
  }
}
let author = new Author("Kevin", "theFunBook");
author.info();
class Publisher {
  #author;
  #book;
  #publisher;
  constructor(author, book, publisher) {
    this.#author = author;
    this.#book = book;
    this.#publisher = publisher;
  }
  get author() {
    return this.#author;
  }
  set author(newAuthor) {
    this.#author = newAuthor;
    return this;
  }
  get publisher() {
    return this.#publisher;
  }
  set publisher(newPublisher) {
    this.#publisher = newPublisher;
    return this;
  }
  get book() {
    return this.#book;
  }
  set book(newBook) {
    this.#book = newBook;
    return this;
  }
  info() {
    console.log(
      `${this.#publisher} is the proud publisher of ${this.#book} by ${
        this.#author
      }`
    );
  }
}
let disney = new Publisher("Kevin", "theFunBook", "Disney");
disney.info();
class Review {
  #rating;
  #user;
  #book;
  constructor(username, rating, book) {
    this.#user = username;
    this.#rating = rating;
    this.#book = book;
  }
  get user() {
    return this.#user;
  }
  set user(newUser) {
    this.#user = newUser;
    return this;
  }
  get rating() {
    return this.#rating;
  }
  set rating(newRating) {
    this.#rating = newRating;
    return this;
  }
  get book() {
    return this.#book;
  }
  set book(newBook) {
    this.#book = newBook;
    return this;
  }
  info() {
    console.log(`${this.#user} rates ${this.#book}, ${this.#rating}!`);
  }
}
let shandysReview = new Review("Shandy", "5 stars", "theFunBook");
shandysReview.info();

/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.



    //your code here...




/****************************************************************************************************************************************************************************************   
*/

/*
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.




    //your code here...
*/
