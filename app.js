/* user will input a book title*/
const searchBook = document.getElementById("inputBookTitle");
const btnShowBooks = document.getElementById("btn-book-searches");
btnShowBooks.addEventListener("click", getBooks);

//var img, title, author, genre, description;


// function getBooks(){
    
//     const apiURL = `https://www.googleapis.com/books/v1/volumes?q=`;
//     fetch(apiURL).then(getJson).then(updateDisplay).catch(error);
// }

// function getJson(aResponse){
//     const theResponse = aResponse.json();
//     console.log(theResponse);
//     return theResponse;
// }

// function updateDisplay(jsonObj){
//     let bookNameSearched = searchBook.value;
//     let bookObjArray = jsonObj.results;
// }

// function anyErrors(error){
//      console.log(error);
// }