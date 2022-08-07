
// CALLBACKS AND ASYNCHRONOUS OPERATIONS :

// IN JAVASCRIPT THE CODE IS EXECUTED LINE-BY-LINE IN A SEQUENCE , SO WHEN WE RUN PARALLEL PROGRAMS OR ASYNCHRONOUS OPERATIONS LIKE FETCHING DATA FROM BACKEND , JAVASCRIPT DOES NOT WAITS FOR THE RESPONSE , IT SIMPLY EXECUTES THE NEXT LINE OF CODE. 

//WHEN WE GIVE THE ASYNCHRONOUS OPERATION A FUNCTION TO CALL WHEN IT IS COMPLETED. THIS FUNCTION IS CALLED A CALLBACK FUNCTION.







let list = []



$.get("https://jsonplaceholder.typicode.com/posts", (response) =>{
    console.log(response)
    // list = response

    const id = 1
    $.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (response) => {
        console.log(response)
// A CALL BACK FUNCTION INSIDE ANOTHER CALL BACK FUCTION IS KNOWN AS A "CALLBACK FUNCTION".
        $.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, (response) => {
            console.log(response)
        })
    })
}).fail(err => {
    console.log(err)
})



console.log(list)
