import React from 'react';

const todos = ({todos,DeleteTodo})=>{
    console.log("helloworld")
    const todoList = todos.length ? 
        (todos.map(todo=>{
            return(
                <div className="collection-item " key={todo.id}>
                <span onClick={()=>{DeleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
    })) :
    (
        <h1>Yay! you don't have todo's</h1>
    )
    
    return(
        <div className="todos collection">
            {todoList}
        </div>

    )
}
export default todos