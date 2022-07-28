import React, { Component } from "react";

import AppHeader from '../app-header';
import SearcPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css'

export default class App extends Component {
  
  state = {
    todoData: [
      {label:'Drink coffee', important: false, done: false ,key: 1},
      {label:'Create React App', important: false, done: false, key: 2},
      {label:'Fix some life problems', important: true, done: false, key: 3}
    ],
    actData:[]  
  }
  //  tempData = []
  serchEngine =(val) =>{
    let actualData = {...this.state}
    if (val){
      console.log('not empty');
      let checkData = this.state.todoData.filter((i)=> i.label.includes(val))
      if (checkData.length > 0){
        actualData = checkData
    }
    console.log(actualData);

    return actualData;
  }
}
  

  // actualDataFunc = (filterData) =>{
  //   let actualData = {...this.state}
  //   if (filterData){
  //     console.log('not empty');
  //   }
  //   console.log(actualData);

  //   return actualData;
  // }
  
    
  //   // this.setState(({todoData}) =>{
  //     let data = {...this.state.todoData}
  //     data = this.state.todoData.filter((i)=> i.label.includes(val))
  //     console.log(data.length);
  //     console.log(data);
  //     console.log(this.state.todoData);
  //     if (data.length > 0){
  //         this.tempData = [data]
 
    // const data = this.state.todoData.filter((i)=> i.label.includes(val))
    // }
  

  togleProp(arr, id, propName){
    const idx = arr.findIndex(el =>el.key === id);
    const oldItem = arr[idx]
    const newItem = {...oldItem,
       [propName]: !oldItem[propName] }
    //2. new array
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }
  addItem = (val) =>{
    console.log(val);
    this.setState(({todoData}) =>{
      // todoData.push({
      //   label: val,
      //   important: false,
      //   key: todoData.length++
      // })
      const newItem ={
        label: val,
        important: false,
        done: false,
        key: todoData.length + 1 
      }
      const newData = [...todoData, newItem]


      console.log(todoData);
      // return todoData
      return {todoData: newData}
    })
  }
  deleteItem = (id) =>{
    console.log(id);
    this.setState(({todoData}) =>{
      const data = todoData.filter((val)=>val.key !== id)
      return {
        todoData: data
      }
    })
  }
  onTogleImp = (id) =>{
    console.log('onTogleImp', id);
    this.setState(({todoData}) => {
      // const newArr = todoData.map(elem =>{ 
      //   if (elem.key === id){
      //     elem.important = !elem.important 
      //   }
      //   return elem
      //   })
     
      //1. update object
      // const idx = todoData.findIndex(el =>el.key === id);
      // const oldItem = todoData[idx]
      // const newItem = {...oldItem, important: !oldItem.important }
      // //2. new array
      // const newArray = [
      //   ...todoData.slice(0, idx),
      //   newItem,
      //   ...todoData.slice(idx + 1)
      // ]
      //  console.log(todoData);
      // console.log(newArray);
      return {
        todoData: this.togleProp(todoData, id, 'important') 
      }

    })
  }
  onTogleDone = (id) =>{
    console.log('onTogleDone', id);
    this.setState(({todoData}) => {
      // const newArr = todoData.map(elem =>{ 
      //   if (elem.key === id){
      //     elem.done = !elem.done 
      //   }
      //   return elem
      //   })
      // editItem.important = !editItem.important
      // console.log(newArr);
      return {
        todoData: this.togleProp(todoData, id, 'done') 
      }

    })
  }
  
  render() {
    
    return (
    <div className="todo-app">
     <AppHeader todoData={this.state.todoData}/>
     <div className='top-panel d-flex'>
      <SearcPanel 
      serchEngine={this.serchEngine}/>
      <ItemStatusFilter />
      </div>
      <TodoList 
        todoData={this.state.todoData}
        actualDataFunc={this.actualDataFunc}
        onDeleted = {this.deleteItem}
        addThis = {this.addItem}
        onTogleDone = {this.onTogleDone}
        onTogleImp = {this.onTogleImp}/>
    </div>
    )  
  }
}

// const App = () => {
//     const todoData = [
//       {label:'Drink coffee', important: false, key: 1},
//       {label:'Create React App', important: false, key: 2},
//       {label:'Fix some life problems', important: true, key: 3}
//     ]
  
//     return (
//     <div className="todo-app">
//      <AppHeader todo={1} done={5}/>
//      <div className='top-panel d-flex'>
//       <SearcPanel />
//       <ItemStatusFilter />
//       </div>
//       <TodoList 
//         todoData={todoData}
//         onDeleted = {(id) => console.log(`deleted ${id}`)}/>
//     </div>
//     )
//   }

//   export default App;