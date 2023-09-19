//////// acces DOM

// var titles = document.getElementsByClassName("title");

// console.log(Array.isArray(titles)); // false
// console.log(Array.isArray(Array.from(titles)))// true


//  Array.from(titles).forEach(function(item){
//      console.log(item);
//  });


////////  queryselector method

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);
// 
// const books = document.querySelector('#book-list li .name');
// console.log(books);
// 
// const booksAll = document.querySelectorAll('#book-list li .name');
// console.log(booksAll);
// console.log(booksAll[0]);
// 
// Array.prototype.forEach.call(booksAll , function( book ){
//     console.log(book);
// })


///////  change HTML

///  var books = document.querySelectorAll("#book-list li .name");
///  // console.log(books);
///  
///  Array.prototype.forEach.call(books ,function( book ){
///      book.textContent += "(book title)";
///  
///  });
///  
///  const bookList = document.querySelector("#book-list");
///  bookList.innerHTML = "<h2>books and more </h2>";
///  bookList.innerHTML += "<p>books and more </p>";

const banner = document.querySelector("#page-banner");
console.log(banner.nodeName);         // DIV
console.log(banner.hasChildNodes()); //  true