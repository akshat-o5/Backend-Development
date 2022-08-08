
info = {
    name : 'Akshat',
    course : 'Btech',
    year : 3,
    developer: true
}

// IT MEANS TO ALLOW ACCESSING OF info FROM OTHER FILES AS WELL.
module.exports = info











// MODULE WRAPPER FUNCTION:

// function(exports, require, module, __filename, __dirname) 

// NODEJS DOES IT AUTOMATICALLY


console.log(exports, require, module, __filename, __dirname)