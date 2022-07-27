import React from "react";
import './app-header.css'

const AppHeader = ({todoData}) => {
  // const {todoData} = this.props
  const taskDone = todoData.filter(val => val.done === true).length
  const taskCount = todoData.length
  const taskTodo = taskCount - taskDone
  // console.log(taskDone, taskCount);

    return(
      <div className="app-header d-flex" >
        <h1> My ToDo List</h1>
        <span>{taskTodo} more to do, {taskDone} done</span>
      </div>
    )
  }

export default AppHeader;