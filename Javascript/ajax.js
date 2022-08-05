// AJAX IS A SHORT FORM FOR ASYNCHRONOUD=S JAVASCRIPT AND XML.

//IT ALLOWS WEBPAGES TO BE UPDATED ASYNCHRONOUSLY BY EXCHANGING DATA WITH BACKEND. THIS MAKES IT POSSIBLE TO UPDATE PARTS OF WEBPAGE, WITHOUT RELOADING TH WHOLE PAGE.

// INITIALLY AJAX WAS USED TO SEND AND RECIEVE XML BECAUSE THAT WAS HOW THE DATA WAS RECIEVED IN BACKEND IN OLD DAYS.

// BUT NOW IT CAN ALSO BE USED TO SEND/RECIEVE JSON OBJECTS, WHICH IS PRETTY COMMON THESE DAYS.




// NORMALLY, THE WAY JAVASCRIPT CODE IS RUN IS THAT IT EXECUTES ONE LINE OF CODE AND THEN MOVES TO NEXT LINE AND THEN THE LINE AFTER THAT AND SO ON.

// SAY THERE IS A LINE OF CODE WHICH TAKES 5 SECONDS TO EXECUTE. THIS WOULD MEAN THAT JAVASCRIPT WILL HAVE TO WAIT 5 SECONDS BEFORE IT CAN MOVE ON TO EXECUTE MORE LINES OF CODE.

// TO AVOID THIS, THERE IS ANOTHER WAY TO EXECUTE A SPECIFIC PART OF CODE SUCH THAT THE EXECUTUIOBN STARTS AND IT RUNS IN THE BACKGROUND, WHICH ALLOWS THE REST OF THE CODE TO GET EXECUTED. RUNNING CODE IN THE BACKGROUND IS CALLED ASYNCHRONOUS EXECUTION.




// AJAX USES A BROWSER BUILT-IN XMLHttpRequest OBJECT TO MAKE REQUESTS TO THE BACKEND SERVER. THIS GAVE A SIMPLE AND STANDERED WAY TO MAKE HTTP REQUESTS FROM JAVASCRIPT TO GRT CONTENT AND UPDATE THE HTML PAGE.




// www.jasonplaceholder.com







// function getTODOListFromBackend() {
//     // this line will create a new instance of XMLHTTPREQUEST object and will store it inside the http variable
//     var http = new XMLHttpRequest()
//     http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
//     http.send()

// }

// getTODOListFromBackend()







// HANDELLING HTTPS RESPONSE



// THE 'readyState' PROPERTY:

// The XMLHTTPRequest object gives us access to another property called readyState. The readyStaqte property holds the status of the XMLHTTPRequest.

// These are availabloe status for the request:

// 1) UNSENT: it means that the request has been initiated but open() not called yet. it is represented by value 0.

// 2) OPENED: it means that open() has been called. it is represented by value 1.

// 3) HEADERS RECIEVED: it means that the send() has been called. it is represented by value 2.

// 4) LOADING: it means tat the request is being processes. it is represented by value 3.

// 5) DONE: it means that the request is completed and response is ready. it is represented by value 4.








function getTODOListFromBackend() {
    // this line will create a new instance of XMLHTTPREQUEST object and will store it inside the http variable
    var http = new XMLHttpRequest()
    http.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                // console.log('RESPONSE RECIEVED')
                console.log(JSON.parse(this.responseText))
            }
            else{
                console.log('CALL FAILED')
            }
            
        }
    }
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
    http.send()   
}

getTODOListFromBackend()