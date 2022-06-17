import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({todoData}) =>{
  const elements = todoData.map((element) =>{
    const {key, ...elemProps} = element; //указав свойство отдельно, оно не войдет в СПРЕД
    return (
      <li key={key}>
        <TodoListItem {...elemProps} />
      </li>
    )
  })  
  return(  
      <ul>
        {elements}
    </ul>
    )
  }

export default TodoList;