const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}
//Convert javascript to JSON string
const bookJSON = JSON.stringify(book)

//Convert JSON string to javascript
const bookObject = JSON.parse(bookJSON)
console.log(bookObject.title)