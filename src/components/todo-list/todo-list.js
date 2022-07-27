import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css'

const TodoList = ({todoData, onDeleted, addThis, onTogleDone, onTogleImp}) =>{    //передаем функцию из APP
  const elements = todoData.map((element) =>{
    const {key, ...elemProps} = element; //указав свойство отдельно, оно не войдет в СПРЕД
    return (
      <li key={key} className='list-group-item'>
        <TodoListItem {...elemProps} 
        //передаем/вызываем функцию из APP
        onDeleted = {()=>onDeleted(key)}
        onTogleDone = {() => onTogleDone(key)}
        onTogleImp = {() => onTogleImp(key)}/>          
      </li>
    )
  })  
  // const onAddClick = (event) =>{
  //   event.preventDefault()
  //   console.log(document.getElementById('addInput').value);
  // }
  const clearInput = (val) =>{
    document.getElementById(`${val}`).value = '';
  }
  const enterPress = (e) =>{
    e.preventDefault();
    console.log(123);
    const formValue = document.getElementById('addInput').value;
    // const formValue = e.target.value;
    formValue ? addThis(formValue) || clearInput('addInput') : alert('empty value') 
  }

  return(  
    <div>
      <ul className="list-group todo-list">
        {elements}
    </ul>
    <form className="add-form input-group"
    onSubmit = {enterPress} >
      <input
        className="form-control"
        id="addInput" 
        type='text'></input>
      <button 
        type='submit' // or empty type
        className="btn btn-warning"
        id="addBtn">ADD</button>
    </form>
    </div>
    )
  }

export default TodoList;