// TODO: add functional for marking item of list : DONE 

import React , { Component }from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component{
  // constructor (){
  //   super();
  //   this.onLabelClick = () =>{
  //     console.log(this.props.label)
  //   }
  // }
  // state = {
  //   done: false,
  //   important: false
  // }
  // onLabelClick = () =>{
  //   console.log(this.props.label)
  //   if (this.state.done){
  //     this.setState({done:false})
  //     console.log(1);
  //   } else{
  //     this.setState({done:true})
  //     console.log(2);
  //   }
  // }
  // onLabelClick = () => {
  //   this.setState(({done})=>{
  //     return {
  //       done: !done
  //     }
  //   })
  // }
  // onMarkClick = () =>{
  //   console.log('You clicked on mark button!!!');
  //   if (this.state.important){
  //     this.setState({important: false})
  //   }else{
  //     this.setState({important: true})
  //   }
  // }
  // onMarkClick = () =>{
  //   this.setState (({important}) =>{
  //     return{
  //       important: !important
  //     }
  //   })
  // }
//   onLabelClick(){
//     console.log(this.props.label) // work with bind(this)
// }
  render(){

    const {label, onDeleted, onTogleDone, onTogleImp,done, important} = this.props; //передаем функцию из todo-list
    // const {done, important} = this.state;
    
  // const style = {
  //     color: important ? 'tomato': 'black'
  // }
  let classNames = "todo-list-item"
  if (done){
    classNames += ' done';
  }
  let classNamesLabel = "todo-list-item-label";
  if (important){
    classNames += ' important';
  }

  return (
      <span className={classNames}>
        <span
          className={classNamesLabel}
          onClick = {onTogleDone}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-end"
                onClick = {onTogleImp}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-end"
                //передаем/вызываем функцию из todo-list
                onClick = {onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    )

  }
}

// const TodoListItem = ({label, important = false}) =>{
//     const onLabelClick = () =>{
//         console.log(label)
//     }
//     const style = {
//         color: important ? 'tomato': 'black'
//     }
//     return (
//         <span className="todo-list-item">
//           <span
//             className="todo-list-item-label"
//             style={style}
//             onClick = {onLabelClick}>
//             {label}
//           </span>
    
//           <button type="button"
//                   className="btn btn-outline-success btn-sm float-end">
//             <i className="fa fa-exclamation" />
//           </button>
    
//           <button type="button"
//                   className="btn btn-outline-danger btn-sm float-end">
//             <i className="fa fa-trash-o" />
//           </button>
//         </span>
//       )
// }
// export default TodoListItem; 

