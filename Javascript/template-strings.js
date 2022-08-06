// A TEMPLATE STRING IS JUST A STRING WHICH ALLOWS EMBEDDING EXPRESSIONS INSIDE IT. TO CREATE A TEMPLATE STRING, YOU DON'T USE A SINGLE OR DOUBLE QUOTES, YOU USE A BACK TICK. THE EXPRESSIONS ARE EMBEDDED BY WRAPPING THEM INSIDE A  `${}`.




const name = 'Akshat'

const mGreetings = `Hello ${name}`

console.log(mGreetings)




function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`
}

const mGreetings1 = `Hello ${getFullName('Akshat', 'Gupta')}`

console.log(mGreetings1)




