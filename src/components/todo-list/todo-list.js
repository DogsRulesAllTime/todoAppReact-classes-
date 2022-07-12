import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css'

const TodoList = ({todoData}) =>{
  const elements = todoData.map((element) =>{
    const {key, ...elemProps} = element; //указав свойство отдельно, оно не войдет в СПРЕД
    return (
      <li key={key} className='list-group-item'>
        <TodoListItem {...elemProps} />
      </li>
    )
  })  
  return(  
      <ul className="list-group todo-list">
        {elements}
    </ul>
    )
  }

export default TodoList;