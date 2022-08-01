import React, { Component } from "react";
import './item-status-filter.css'

export default class ItemStatusFilter extends Component{

    render(){

        
        const {status, statusValue} = this.props;
        // console.log(status);
        const sendKey = (val) =>{
            const key = val
            // console.log(key);
            statusValue(key)
        }

        const elements = status.map(elem =>{
            let className = "btn"
            if (elem.stat){
                className += " btn-info"
            } else {
                className += " btn-outline-secondary"
            }
            return(
                <button 
                onClick={(e) => sendKey(e.target.innerHTML)}
                key={elem.key} className={className}>{elem.label}</button>
            )
        })
        
        
        return(

            <div className="btn-group">
                {elements}
{/* 
                <button className="btn btn-info">All</button>
                <button className="btn btn-outline-secondary">Active</button>
                <button className="btn btn-outline-secondary">Done</button> */}
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