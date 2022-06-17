import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({todoData}) =>{
  const elements = todoData.map((element) =>{
    return (
      <li><TodoListItem {...element}/></li>
    )
  })  
  return(
      <ul>
        {elements}
    </ul>
    )
  }

export default TodoList;