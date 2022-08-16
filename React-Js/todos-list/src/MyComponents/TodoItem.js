// THIS COMPONENT WILL HOLD AN INDIVIDUSL TODO ITEM

// rafc -> REACT ARROW FUNCTION COMPONENTS

import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.duration}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      </div>
       <hr/> 
    </>
    // <div>
    //     Todo Works !!
    // </div>
  )
}
