// rafc -> REACT ARROW FUNCTION COMPONENTS

import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [duration, setduration] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !duration) {
            alert("Title or Duration cannot be blank");
        }
        else {
            addTodo(title, duration);
            setTitle("");
            setduration("");
        }
    }
    return (
        // my-3 :
        // MARGIN Y ME 3 DEDO
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="duration" className="form-label">Todo Duration</label>
                    <input type="text" value={duration} onChange={(e) => setduration(e.target.value)} className="form-control" id="duration" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
