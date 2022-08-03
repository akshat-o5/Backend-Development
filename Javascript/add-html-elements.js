// CREATING A NEW HTML ELEMENT
var newListElement = document.createElement('li')
// console.log(newListElement)


// CREATINGA A NEW ELEMENT INSIDE PREVOIUS ELEMENT
var ele1 = newListElement.appendChild(document.createTextNode('List item 3'))
console.log(ele1)

