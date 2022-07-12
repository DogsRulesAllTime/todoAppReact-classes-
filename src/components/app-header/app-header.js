import React from "react";
import './app-header.css'

const AppHeader = ({todo, done}) => {
    return(
      <div className="app-header d-flex" >
        <h1> My ToDo List</h1>
        <span>{todo} more to do, {done} done</span>
      </div>
    )
  }

export default AppHeader;