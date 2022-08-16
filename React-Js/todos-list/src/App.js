// import logo from './logo.svg';
import './App.css';

// IMPORT HEADER COMPONENT
import Header from './MyComponents/Header';

// IMPORT FOOTER COMPONENT
// SINCE WE ARE USING ARROW FUNCTIONS TO MAKE THIS COMPONENT, WE WILL WRITE THE COMPONENT NAME IN CURLY BRACES
import {Footer} from "./MyComponents/Footer";

// IMPORT TODOS COMPONENT
// SINCE WE ARE USING ARROW FUNCTIONS TO MAKE THIS COMPONENT, WE WILL WRITE THE COMPONENT NAME IN CURLY BRACES
import {Todos} from "./MyComponents/Todos";

// // Hooks are a new addition in React 16.8. 
// //They let you use state and other React features without writing a class.
// import React, { useState } from 'react';

// ADDING ADDTODO COMPONENT
import {AddTodo} from "./MyComponents/AddTodo";

// The Effect Hook lets you perform side effects in function components:
import React, { useState, useEffect } from 'react';

// ADDING REACT ROUTER DOM
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"



// ADDING ABOUT COMPONENT
import {About} from "./MyComponents/About";

function App() {

  let initTodo
  if (localStorage.getItem('todos') === null){
     initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }

  const onDelete = (todo) =>{
    console.log("I am ondelete of todo", todo)

    // DELETING A LIST ITEM
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const addTodo = (title, duration) => {
    console.log("I am adding this todo", title, duration)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      duration: duration,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    if (localStorage.getItem('todos')){
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }


// // INITIALIZING ITEMS IN TODO LIST
// // ALSO, USING STATE HOOK 
//   const [todos, setTodos] = useState([
//     {
//       sno : 1,
//       title : "Learn Javascript",
//       duration: '10 days'
//     },
//     {
//       sno : 2,
//       title : "Learn React-Js",
//       duration: '4 days'
//     },
//     {
//       sno : 3,
//       title : "Learn Node-Js",
//       duration: '5 days'
//     },
//     {
//       sno : 4,
//       title : "Learn Express-Js",
//       duration: '3 days'
//     },
//     {
//       sno : 5,
//       title : "Learn MongoDb",
//       duration: '6 days'
//     }
//   ])


// // INITIALIZING LIST ITEMS USING LOCAL STORAGE
//   const [todos, setTodos] = useState([initTodo])


// USING USEEFFECT HOOK
const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // FUNCTION BASED COMPONENTS
  // let myVariable = 354;
  return ( 
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
