import React from "react";

import AppHeader from '../app-header';
import SearcPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css'

const App = () => {
    const todoData = [
      {label:'Drink coffee', important: true, key: 1},
      {label:'Create React App', important: false, key: 2},
      {label:'Fix some life problems', important: true, key: 3}
    ]
  
    return (
    <div className="todo-app">
     <AppHeader todo={1} done={5}/>
     <div className='top-panel d-flex'>
      <SearcPanel />
      <ItemStatusFilter />
      </div>
      <TodoList todoData={todoData}/>
    </div>
    )
  }

  export default App;