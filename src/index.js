import React from 'react';
// import ReactDOM  from 'react-dom/client'; // react 18v 
import ReactDOM  from 'react-dom'; // react 16v
import AppHeader from './components/app-header';
import SearcPanel from './components/search-panel';
import TodoList from './components/todo-list';
//test git branches 
const App = () => {
  const todoData = [
    {label:'Drink coffee', important: true, key: 1},
    {label:'Create React App', important: false, key: 2},
    {label:'Fix some life problems', important: true, key: 3}
  ]

  return (
  <div>
   <AppHeader />
    <SearcPanel />
    <TodoList todoData={todoData}/>
  </div>
  )
}

// render in react 18v
// const container = document.getElementById('root')
// ReactDOM.createRoot(container).render(el);
// render in react 16v 
ReactDOM.render(<App />, document.getElementById('root'))