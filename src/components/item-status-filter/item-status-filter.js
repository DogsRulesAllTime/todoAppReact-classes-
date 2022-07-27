import React, { Component } from "react";
import './item-status-filter.css'

export default class ItemStatusFilter extends Component{

    render(){
        // const {todoData} = this.props
        // const taskDone = todoData.filter(val => val.done === true).length
        // const taskCount = todoData.length
        // console.log(taskDone, taskCount);
        return(
            <div className="btn-group">
                <button className="btn btn-info"
                        htmlFor="success-outlined">All</button>
                <button className="btn btn-outline-secondary">Active</button>
                <button className="btn btn-outline-secondary">Done</button>
            </div>
        ) 
    }
}

// const ItemStatusFilter = () =>{
//     return(
//         <div className="btn-group">
//             <button className="btn btn-info"
//                     htmlFor="success-outlined">All</button>
//             <button className="btn btn-outline-secondary">Active</button>
//             <button className="btn btn-outline-secondary">Done</button>
//         </div>
//     )
// }
// export default ItemStatusFilter;