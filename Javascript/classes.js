
// CLASSES  IN  ES6

// TO CREATE OBJECT FACTORIES, YOU CAN USE THE CLASS KEYWORD.



// // USING OLD STYLE OF DEXLARING CLASSES AND CONSTRUCTRS
// function Person(name, year) {
//     this.name = name
//     this.year = year

//     this.getDetails = function(){
//         return "name: " + this.name 
//         + " and age: " + (2022 - this.year)
//     }
// }



// NEW WAY OF REATING CLAASES AND CONTRUCTORS
class Person{

    constructor(name, year){
        this.name = name
        this.year = year
    }

    getDetails = () => {
        return `${this.name} ${2022 - this.year}`
    }

}


var akshat = new Person('akshat', 2002)

console.log(akshat.getDetails())