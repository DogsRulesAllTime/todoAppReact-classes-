import React, { useState } from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css'

const TodoList = ({todoData, onDeleted, addThis, onTogleDone, onTogleImp}) =>{   
  // console.log(todoData); //передаем функцию из APP
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

  const [val, setVal] = useState('startPoint')
  const onSpan = (e) =>{
    setVal (e.target.value)
    }
  const [status, setStatus] = useState(true)
  let classNameTest = 'testStateHook'
  let btnMsg = 'Hide'
  if (status){
    classNameTest += ' none'
    btnMsg = 'Show'
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
    <button
    onClick={()=>setStatus(!status)}>{`TEST FOR STATE HOOK ${btnMsg}`}</button>
    <div className={classNameTest}>
    <input
      className="form-control" 
      type='text'
      onChange={(e) =>onSpan(e)}></input>
      <span
      className="spanOnChange">{val}</span>
      </div>
    </div>
    )
  }

export default TodoList;