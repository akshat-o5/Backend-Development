
// TO IMPORT OS MODULE
const os = require('os')

// // info about current user
// const user = os.userInfo()
// console.log(user)

// //method that returns the system uptime in seconds
// console.log('the system uptime is ' ,os.uptime() ,'seconds')

// //some other methods of os modulule
// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     total_memory: os.totalmem(),
//     free_memory: os.freemem(), 
// }
// console.log(currentOS)


console.log(os.freemem())

console.log(os.homedir())

console.log(os.hostname())

console.log(os.platform())

console.log(os.release())

console.log(os.type())




// GOTO NODEJS DOCUMENTATION TO SEE MORE DFEATURES OF OS BUIT-IN MODULES