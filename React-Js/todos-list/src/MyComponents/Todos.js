// THIS COMPONENT WILL GIVE US A LIST OF ALL TODO ITEMS.

// rafc -> REACT ARROW FUNCTION COMPONENTS

import React from 'react'

import {TodoItem} from "./TodoItem";

export const Todos = (props) => {

  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
}

  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {/* {props.todos} */}
      {props.todos.length == 0 ? "No Todos to display" : props.todos.map(todo =>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        
      })}
      {/* {props.todos.map(todo =>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        
      })} */}
    </div>
    // <div>
    //     Todos Works !!
    // </div>
  )
}
