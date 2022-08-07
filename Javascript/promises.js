
// PROMISES :

// A PROMISE IS USED TO HANDEL THE ASYNCHRONOUS RESULT OF AN OPERATION. 

// IT DEFERS THE EXECUTION OF A CODE BLOCK UNTILL AN ASYCHRONOUS REQUEST IS COMPLETED.

// THIS WAY, OTHER OPERATIONS CAN KEEP RUNNING WITHOUT INTERRUPTION


// A PROMISE HAS 3 STATES :

// -> PENDING : It means the operation is going on

// -> FULFILLED : It means that the operation was completed.

// -> REJECTED : It means the operation did not complete and an error can be thrown.












const postLinePromise = new Promise((resolve, reject) => {
    $.get('https://jsonplaceholder.typicode.com/posts', (data) => {
        console.log(data)
        resolve(data)
    }).fail (err => {
        reject(new Error(`Call failed for GET POST List Request with status ${err.status}`))
    })
})









// 'then()' method is called when the resolve() is executed. It recieves data passed in resolve() methids as an arguments.




// 'catch()' method is called when the reject() method id executed. it recieves the data passes in reject() method as arguments.







postLinePromise
.then(() => {
    console.log('Call Success')
})
.catch(() => {
    console.log('Call Failed')
})