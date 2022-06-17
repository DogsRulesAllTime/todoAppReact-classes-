import React from 'react'

const TodoListItem = ({label, imported}) =>{
    const style = {
        color: imported ? 'tomato': 'black'
    }
    return <span style={style}>{label}</span>
}
export default TodoListItem; 