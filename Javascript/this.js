
// this KEYWORD:


// In an object method, this refers to the object.

// Alone, this refers to the global object.

// In a function, this refers to the global object.

// In a function, in strict mode, this is undefined.

// In an event, this refers to the element that received the event.

// Methods like call(), apply(), and bind() can refer this to any object.





var name = 'AKSHAT'

var person = {
    name: 'akshat' , 
    year: 2002 , 
    job: 'engineer', 
    
    getName: function() {
        console.log(this.name)
    } , 

    parents: {
        name: 'amit' ,
        year : 1970 ,
        job: 'businessman' ,
        getName : function() {
            console.log(this.name)
        } 
    }
}

person.getName()

person.parents.getName()