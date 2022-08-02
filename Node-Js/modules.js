// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) =>{
//     console.log('Hello there '+ name)
// }

const names = require('./names')
const sayHi = require('./utils')
// console.log(names)


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)