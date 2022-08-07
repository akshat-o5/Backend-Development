
// CONSTRUCTORS


// The constructor method is a special method of a class for creating and initializing an object instance of that class.

// A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.



// Syntax:

// constructor() { /* … */ }

// constructor(argument0) { /* … */ }

// constructor(argument0, argument1) { /* … */ }

// constructor(argument0, argument1, /* … ,*/ argumentN) { /* … */ }




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

    this.age = function() {
        console.log(2022 - this.year)
    }
}


// WE USE new KEYWORD TO DEFINE INSTANCES .

// CREATION OF NEW INSTANES IS CALLED INSTANTIATION.


var john = new Person('john', 1992, 'engineer')

console.log(john)

john.age()


var claire = new Person('claire', 2002, 'doctor')

console.log(claire)

claire.age()