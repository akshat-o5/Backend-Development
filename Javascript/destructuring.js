
// DESTRUCTURING

// IT ALLOWS US TO 'UNPACK' ARRAYS OR OBJECTS INTO A BUNCH OF VARIABLES WHICH MAKES WORKING WITH ARRAYS AND OBJECTS A BIT MORE CONVINIENT.




const name = 'Akshat Gupta'

const nameArr = name.split(' ')

console.log(nameArr)


// let firstName = nameArr[0]
// let lastName = nameArr[1]


let [firstName, lastName] = nameArr 


console.log(firstName)
console.log(lastName)
