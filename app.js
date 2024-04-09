/* user will input a book title*/
const searchBook = document.getElementById("inputBookTitle");
const btnShowBooks = document.getElementById("btn-book-searches");
btnShowBooks.addEventListener('click', getBooks);

//var img, title, author, genre, description;

function getBooks(){
    const bookTerm = searchBook.value;
    console.log("BUTTON PRESSED");

    getResults();
}

async function getResults(){
    const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${bookTerm}`;
    console.log(bookTerm);
    
    try {
        const response = await fetch(apiURL);
        const json = await getJson(response);
        updateDisplay(json);
    } catch (error) {
        reportError(error);
    }
}

async function getJson(aResponse){
    return aResponse.json();
}

async function updateDisplay(jsonObj){

    try {
        const data = jsonObj;
        console.log(jsonObj);
    } catch (error) {
        reportError(error);
    }
}

async function reportError(anError){
    console.log(anError);
}

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