
// INHERITANCE



// When it comes to inheritance, JavaScript only has one construct: objects.

// Each object has a private property which holds a link to another object called its prototype. 

// That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. 

// By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.





// JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.






// SAMPLE CLASS
var person = {
    name: 'akshat' ,
    year: 2002 ,
    job: 'engineer'
}


// CREATING INSTANCES OF THE ABOVE CLASS
function Person(pname, pyear, pjob){
    this.name = pname
    this.year = pyear
    this.job = pjob

    // this.age = function() {
    //     console.log(2022 - this.year)
    // }
}

// MAKING A PROTOTYPE

Person.prototype.age = function() {
    console.log(2022 - this.year)
}

Person.prototype.updateYear = function(birthyear){
    this.year = birthyear
}


// WE USE new KEYWORD TO DEFINE INSTANCES .

// CREATION OF NEW INSTANES IS CALLED INSTANTIATION.


var john = new Person('john', 1992, 'engineer')

console.log(john)

john.age()


var claire = new Person('claire', 2002, 'doctor')

console.log(claire)

claire.age()


claire.age()

claire.updateYear(2000)

claire.age()














// INHERITANCE IN ES6


// ES6 PROVIDES US WITH A KEYWORD CALLED extends TO INHERIT CLASSES.

// The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.



// Syntax: 

// class ChildClass extends ParentClass { /* … */ }



// console.clear()



// NEW WAY OF REATING CLAASES AND CONTRUCTORS
class Person{

    constructor(name, year){
        this.name = name
        this.year = year
    }

    getDetails = () => {
        console.log(`${this.name} ${2022 - this.year}`) 
    }

}


class Pilot extends Person{

    constructor(name, year, exp, type, liscence){
        super(name, year)
        this.experience = exp
        this.type = type
        this.liscence = liscence
    }

    getData = () =>{
        console.log(`${this.experience}, ${this.type}`)
    }

}

const akshat =new Pilot('akshat', 2002, 20, 'private', 'TC1234')

console.log(akshat)

akshat.getData()

// var akshat = new Person('akshat', 2002)

// console.log(akshat.getDetails())