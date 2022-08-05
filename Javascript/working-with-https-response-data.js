
function createTODODynamically(id, title){
    var newListElement = document.createElement('li')
    var textNode = document.createTextNode(title)
    newListElement.appendChild(textNode)
    newListElement.id = id

    return newListElement
}    





function getTODOListFromBackend() {
    // this line will create a new instance of XMLHTTPREQUEST object and will store it inside the http variable
    var http = new XMLHttpRequest()
    http.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                // console.log('RESPONSE RECIEVED')
                var response = JSON.parse(this.responseText)
                for(var i=0; i<response.length; i++){
                    // console.log(response[i].id, response[i].title)
                    console.log(createTODODynamically(response[i].id, response[i].title))
                    // list.appendChild(createTODODynamically(response[i].id, response[i].title))
                }
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
