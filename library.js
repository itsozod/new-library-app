// data for default books
const booksData = {
  id: 0,
  name: "Гарри Потер",
  author: "Джоанна Роулинг",
  price: 100,
  currency: "TJS",
};
const booksData2 = {
  id: 1,
  name: "Мертвые Души",
  author: "Николай Васильевия Гоголь",
  price: 50,
  currency: "TJS",
};
const booksData3 = {
  id: 3,
  name: "Белый клык",
  author: "Джек Лондон",
  price: 120,
  currency: "TJS",
};
const booksData4 = {
  id: 5,
  name: "Гений",
  author: "Теодор Драйзер",
  price: 130,
  currency: "TJS",
};
// array to hold books data
let myBooks = [];
myBooks.push(booksData);
myBooks.push(booksData2);
myBooks.push(booksData3);
myBooks.push(booksData4);

// object to create more books
function Book(name, author, price, currency) {
  this.name = name;
  this.author = author;
  this.price = price;
  this.currency = currency;
}
// Body tag
const bodyTag = document.body;
// Header tag
const header = document.createElement("header");
header.classList.add("header");
// h1 inside header tag
const h1Header = document.createElement("h1");
h1Header.innerText = "Book Store";
header.appendChild(h1Header);
// container containing search input and add book button
const container = document.createElement("div");
container.classList.add("container");
// search input
const searchInput = document.createElement("input");
searchInput.classList.add("search");
searchInput.type = "search";
searchInput.placeholder = "Search";
container.appendChild(searchInput);
// add book button
const addBookBtn = document.createElement("button");
addBookBtn.innerText = "Add Book";
addBookBtn.classList.add("add-book");
container.appendChild(addBookBtn);
header.appendChild(container);
bodyTag.appendChild(header);

// form container
const formContainer = document.createElement("div");
formContainer.classList.add("form-container");
const formH3 = document.createElement("h3");
formH3.classList.add("form-title");
formH3.innerHTML = "Please fill the inputs below to add your book";
formContainer.appendChild(formH3);

// form
const form = document.createElement("form");
form.classList.add("form");

// name input
const nameLabel = document.createElement("label");
nameLabel.innerText = "Books's name";
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.classList.add("name");
nameInput.placeholder = "Enter book's name";
form.appendChild(nameLabel);
form.appendChild(nameInput);

// author input
const authorLabel = document.createElement("label");
authorLabel.innerText = "Author's name";
const authorInput = document.createElement("input");
authorInput.type = "text";
authorInput.classList.add("author");
authorInput.placeholder = "Enter author's name";
form.appendChild(authorLabel);
form.appendChild(authorInput);

// price input
const priceLabel = document.createElement("label");
priceLabel.innerText = "Price";
const priceInput = document.createElement("input");
priceInput.type = "number";
priceInput.classList.add("price");
priceInput.placeholder = "Enter your price";
form.appendChild(priceLabel);
form.appendChild(priceInput);

// price input
const currencyLabel = document.createElement("label");
currencyLabel.innerText = "Currency";
const currencyInput = document.createElement("input");
currencyInput.type = "text";
currencyInput.classList.add("currency");
currencyInput.placeholder = "Enter your currency";
form.appendChild(currencyLabel);
form.appendChild(currencyInput);

// submit btn
const submitBtn = document.createElement("button");
submitBtn.classList.add("submit-btn");
submitBtn.type = "submit";
submitBtn.innerText = "Submit";
form.appendChild(submitBtn);

formContainer.appendChild(form);
bodyTag.appendChild(formContainer);

// prevent default form
formContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value === "") {
    alert("Enter all fields before submitting");
  } else if (authorInput.value === "") {
    alert("Enter all fields before submitting");
  } else if (priceInput.value === "") {
    alert("Enter all fields before submitting");
  } else if (currencyInput.value === "") {
    alert("Enter all fields before submitting");
  }
});

// booksContainer
const booksContainer = document.createElement("div");
booksContainer.classList.add("booksContainer");
bodyTag.appendChild(booksContainer);

const notFound = document.createElement("h3");
notFound.classList.add("not-found");
notFound.innerText = "Not found...";
bodyTag.appendChild(notFound);

// button to scroll up
const scrollUp = document.createElement("a");
scrollUp.href = "#";
scrollUp.classList.add("to-top");
const iconScroll = document.createElement("i");
iconScroll.classList.add("fas", "fa-chevron-up");
scrollUp.appendChild(iconScroll);
bodyTag.appendChild(scrollUp);

// rendering books from booksData
function showDefaultBooks(data) {
  booksContainer.innerHTML = "";
  data.map((book) => {
    let bookEl = document.createElement("div");
    bookEl.classList.add("bookCard");
    bookEl.innerHTML = `
    <h3>${book.name}</h3>
    <img class="bookImg" src="./images/book.jpg">
    <p>${book.author}</p>
    <p class="price-tag">${book.price} ${book.currency}</p>
    <button class="buy">Buy</button>
    <button class="delete-btn">Remove</button>
    `;
    booksContainer.appendChild(bookEl);

    let deleteBtn = bookEl.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
      let index = myBooks.indexOf(bookEl);
      bookEl.remove();
      myBooks.splice(index, 1);
      console.log("Deleting");
      console.log(myBooks.length);
    });

    let buyBtn = bookEl.querySelector(".buy");
    buyBtn.addEventListener("click", () => {
      if (buyBtn.classList.contains("active")) {
        buyBtn.classList.remove("active");
        buyBtn.textContent = "Buy";
      } else {
        buyBtn.classList.add("active");
        buyBtn.textContent = "Out of stock";
      }
    });
  });
}

showDefaultBooks(myBooks);

// search and filter books
searchInput.addEventListener("keyup", () => {
  const value = searchInput.value;
  let newBooks = myBooks.filter((book) => {
    if (book.name.toLowerCase().includes(value) || book.name.includes(value)) {
      return book.name;
    }
  });
  if (newBooks.length === 0) {
    notFound.classList.add("active");
  } else {
    notFound.classList.remove("active");
  }
  booksContainer.innerHTML = "";
  console.log(newBooks.length);
  console.log(myBooks.length);
  showDefaultBooks(newBooks);
});

// function to scroll to top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// submit to add new books
submitBtn.addEventListener("click", () => {
  let name = document.querySelector(".name").value;
  let author = document.querySelector(".author").value;
  let price = document.querySelector(".price").value;
  let currency = document.querySelector(".currency").value.toUpperCase();
  let newBook = new Book(name, author, price, currency);
  console.log(newBook);
  if (name && author && price && currency) {
    myBooks.push(newBook);
    showDefaultBooks(myBooks);
    setTimeout(() => {
      alert("Added");
      nameInput.value = "";
      authorInput.value = "";
      priceInput.value = "";
      currencyInput.value = "";
      formContainer.classList.remove("active");
      addBookBtn.textContent = "Add book";
    }, 1000);
    console.log(myBooks.length);
  }
});

// button to show to hide form container
addBookBtn.addEventListener("click", () => {
  if (formContainer.classList.contains("active")) {
    formContainer.classList.remove("active");
    addBookBtn.innerText = "Add book";
  } else {
    formContainer.classList.add("active");
    addBookBtn.innerText = "Cancel";
  }
});
