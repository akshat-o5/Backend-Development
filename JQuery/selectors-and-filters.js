
// Basic Syntax Of Jquery:

// $(selector).method()


// -> The '$' sign is used to access jQuery

// -> The 'selector' method is used to find HTML elements

// -> The 'method()' is used to perform some actions on selected elemnts


// SELECTORS and FILTERS provide a way of finding and extracting information from our web page.


// SEECTORS are used to select HTML elements, using CSS like selectors.


// FILTERS are used to refine the results returned from the selectors.





// Selecting elements based on class
console.log($('.list-item'))




// Selecting element based on attributes
console.log($('input[type]'))

// IT returns all vlues with input as type as  text
console.log($('input[type = text]'))




// USING FILTERS:


// SELECTING FIRST LIST ITEM
console.log($('.list-item : first'))

// SELECTING LAST LIST ITEM
console.log($('.list-item : last'))

// SELECTING THIRD ELEMENT OF LIST FROM TOP
console.log($('.list-item').eq(2))






// ready METHOD 
//         IT IS USED TO CHECK WHETHER DOM TREE IS GENERATED OR NOT.



$(document).ready(function() {
    console.log('DOM tree ready')
})