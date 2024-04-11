//Home Page
const hNav = document.getElementById('home-nav');
const hPage = document.getElementById('homePage');
hNav.root = hPage;
//Book Page - how the book viewer should have looked like
const bNav = document.getElementById('book-nav');
const bPage = document.getElementById('bookPage');
bNav.root = bPage;
//Shelf Page - this will hold saved books titles
const shNAv = document.getElementById('shelf-nav');
const shPage = document.getElementById('shelfPage');
shNAv.root = shPage;

const searchBook = document.getElementById('inputBookTitle');/* user will input a book title*/
const bBookResults = document.getElementById('btn-getBooks');
const bSaveToSession = document.getElementById('saveSearch');
const resultNumber = document.querySelector('#result-found');
const storeSessionInput = sessionStorage.getItem('textInput');
const bSaveToFavourites = document.getElementById('saveBook');

let favBookCount;
let booksArray = {};

bSaveToSession.addEventListener('click', saveInputToSession);
bBookResults.addEventListener('click', getBooks);
bSaveToFavourites.addEventListener('click', saveBookToShelf)

const apiAddress = `https://openlibrary.org/search.json?q=`;

function saveInputs(){/* this should save the input from the user and rember it for them */
    sessionStorage.setItem('textInput', storageInput.value);
    console.log("Saved to Session");
}

function getBooks(){/* will get data from the API */
    const bookTitle = searchBook.value;
    const apiURL = `${apiAddress}${bookTitle}`;
    
    fetch(apiURL).then(getJson).then(buildResults).catch(anyErrors);
    console.log("api works");
}

function getJson(){/* will get API Data and store in to a json file */
    const theResponse = aResponse.json();
    console.log(theResponse);
    return theResponse;
}

 /* this should generate a new item box for every result that was found */
function buildResults(jsonObj){
    let dataGathered = jsonObj.results;

    resultNumber.textContent = numFound;

    class BookResults extends HTMLElement{
        connectedCallback(){
             this.innerHTML = `
                 <ion-list>
                    ${dataGathered.map(docs => `
                    <ion-item button onclick="showBookDetails(`${docs.title}`)">
                         <ion-label>
                             <h2>${docs.title}</h2>
                             <h3>${docs.author_name}</h3>
                         </ion-label>
                    </ion-item>
                 `)/* end of function */.join('\n')}
                 </ion-list>
            `/* inner end */
        }
    }
}

customElements.define('book-results', BookResults);
const nav = document.querySelector('ion-nav');

// should lead user to new page 
 function showBookDetails(aTitle){
    
    let book = new Object;
    
    for (aBook of docs){
         if(aBook.title == aTitle){
             book = aBook;
         }
     }
    
      console.log(book.title);
     nav.push("nav-detail", {book});
}

function anyErrors(){/* will report any errors when fetching the API */
    console.log(error);
}

async function saveBookToShelf(aBook){// should build a new item in shelf page when a button is clicked

    class BookResults extends HTMLElement{
        
        connectedCallback(){
             this.innerHTML = `
                 <ion-list>
                    ${dataGathered.map(docs => `
                    <ion-item button onclick="showBookDetails(`${docs.title}`)">
                         <ion-label>
                             <h2>${docs.title}</h2>
                             <h3>${docs.author_name}</h3>
                         </ion-label>
                    </ion-item>
                 `)/* end of function */.join('\n')}
                 </ion-list>
            `/* inner end */
            favBookCount++;
            const bookList = document.getElementById('bookSavedCounter');
            bookList.value = favBookCount.value;
        }
    }
}