
// AJAX WITH JQUERY

// jQuery also supports AJAX calls and it gives us an access to methods to make HTTP calls.


// SYNTAX:

// ->    .get(URL.callback)



// The call back funtion is called when the request is completed.

// You don't have to create XMLHTTPrequest  objects or listen to status changes.

// Jquery handles everything for you.









function getTODOListFromBackend() {
    $.get('https://jsonplaceholder.typicode.com/todos', function(data, status){
        var response = data
        // this line will create a new instance of XMLHTTPREQUEST object and will store it inside the http variable
    // var http = new XMLHttpRequest()
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
    http.send()

    })
    
}

getTODOListFromBackend()