// JSON STANDS FOR JAVASCRIPT OBJECT NOTATION

// IT IS BASICALLY A TEXT FORMAT THAT MAKES IT EASY TO SHARE DATA BETWEEN CLIENTS AND SERVERS. IT'S ORIGIN IS BASED ON HOW JAVASCRIPT OBJECT WORKS SO THAT'A WHY IT LOOKS LIKE A JAVASCRIPT OBJECT.


// // to create a json object
// var mobj = {
//     'name': 'John',
//     'age': 28
// }

// // to access it's elemnts
// console.log(mobj.age)
// console.log(mobj.name)


// // to create a array
// var mArr = [1, 2, 3, 4, 5]

// // to access it's elemnts
// console.log(mArr[0])
// console.log(mArr[1])
// console.log(mArr[2])
// console.log(mArr[3])
// console.log(mArr[4])
// console.log(mArr[5])


// // to create multiple json objects
// var mobj1 = [
//     {
//     'name': 'John',
//     'age': 28
// },{
//     'name': 'Akshat',
//     'age': 20
// },{
//     'name': 'Saatvik',
//     'age': 20
// }
// ]    

// // to access its objects
// console.log(mobj1[0])
// console.log(mobj1[0].age)
// console.log(mobj1[0].name)

// console.log(mobj1[1])
// console.log(mobj1[1].age)
// console.log(mobj1[1].name)

// console.log(mobj1[2])
// console.log(mobj1[2].age)
// console.log(mobj1[2].name)

// console.log(mobj1[3])
// console.log(mobj1[3].age)
// console.log(mobj1[3].name)

// console.log(mobj1[4])
// console.log(mobj1[4].age)
// console.log(mobj1[4].name)

// console.log(mobj1[5])



// WE CAN CONVERT A JASON OBJECT TO A STRING AND FROM A STRING BACK TO JSON OBJECT

// undefined values and it's e;ements are ignored by javascript

var mobj = {
    'name': 'John',
    'age': 28,
    'lastName': undefined,
    'married': true,
    score: [22, 44, 5, 77],
    sex: null,
    marks: {
        'math': 100,
        'science': 99,
        'computer': 100
    }
}

// converting json object to string
var strJson = JSON.stringify(mobj)

console.log(strJson)

// converting string to json object
console.log(JSON.parse(strJson))



// A JSON OBJECTS ACCEPTS A STRING, A NUMBER, AN OBJECT, A BOOLEAN VALUE AND A NULL.