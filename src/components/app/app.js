import React, { Component } from "react";

import AppHeader from "../app-header";
import SearcPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink coffee", important: false, done: false, key: 1 },
      { label: "Create React App", important: false, done: false, key: 2 },
      { label: "Fix some life problems", important: true, done: false, key: 3 },
    ],
    searchValue: "",
    statusValue: "ALL",
    status: [
      {label: "ALL", stat: true, key: 1},
      {label: "Active", stat: false, key: 2},
      {label: "Done", stat: false, key: 3}
    ]
  };




  statusValue = (val) =>{
    this.setState((statusValue) => {
      return {
        statusValue: val,
      };
    });

  }
  statusSelect = (statusValue, status) =>{
    let actualList = [...status]
    const newData = actualList.map((elem) => { 
      if (elem.label === statusValue) {
        elem.stat = true
      } else {
        elem.stat = false
      }
      return elem
    })
    // actualData.filter((elem) => { 
    //   // console.log(elem.label, statusValue, elem.stat);
    //   for (let st of status){
    //     console.log(st);
    //   }

      // if ( statusValue === 'Active' && elem.stat === true && actualData.done === false){
      //   console.log(actualData, 'ok');
      //   return actualData[0]
      // }
    return newData
  }

  selectDataByFilterBtn = (statusValue, status , actualData) =>{
    for (let st of status){
      if ( statusValue === 'Active' && st.stat === true){
          return actualData.filter(elem => elem.done === false)
      } else if (statusValue === 'Done' && st.stat === true){
        return actualData.filter(elem => elem.done === true)
        // return 'done'
      } else if (statusValue === 'ALL' && st.stat === true){
        return actualData
        // return 'all'
      }
  }
}




  serchEngine = (val) => {
    this.setState((searchValue) => {
      return {
        searchValue: val,
      };
    });
  };

  dataFunc = (todoData, searchValue) => {
    let actualData = [...todoData];
    if (searchValue) {
      // console.log('not empty');
      // console.log(searchValue);
      let checkData = todoData.filter((i) => i.label.includes(searchValue));
      if (checkData.length > 0) {
        actualData = checkData;
        // console.log(actualData);
      }
    }
    return actualData;
  };

  togleProp(arr, id, propName) {
    const idx = arr.findIndex((el) => el.key === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    //2. new array
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }
  keyVal = 100

  addItem = (val) => {
    console.log(val);
    this.setState(({ todoData }) => {
      // todoData.push({
      //   label: val,
      //   important: false,
      //   key: todoData.length++
      // })
      const newItem = {
        label: val,
        important: false,
        done: false,
        key: this.keyVal += 1,
      };
      const newData = [...todoData, newItem];

      console.log(todoData);
      // return todoData
      return { todoData: newData };
    });
  };
  deleteItem = (id) => {
    console.log(id);
    this.setState(({ todoData }) => {
      const data = todoData.filter((val) => val.key !== id);
      return {
        todoData: data,
      };
    });
  };
  onTogleImp = (id) => {
    console.log("onTogleImp", id);
    this.setState(({ todoData }) => {
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
        todoData: this.togleProp(todoData, id, "important"),
      };
    });
  };
  onTogleDone = (id) => {
    console.log("onTogleDone", id);
    this.setState(({ todoData }) => {
      // const newArr = todoData.map(elem =>{
      //   if (elem.key === id){
      //     elem.done = !elem.done
      //   }
      //   return elem
      //   })
      // editItem.important = !editItem.important
      // console.log(newArr);
      return {
        todoData: this.togleProp(todoData, id, "done"),
      };
    });
  };

  render() {
    const { todoData, searchValue , statusValue, status} = this.state;

    const actualData = this.dataFunc(todoData, searchValue);

    // console.log(this.state.todoData);
    // console.log(actualData);

    const testData = this.statusSelect (statusValue, status, actualData)
    
    console.log(testData);

    const inputData = this.selectDataByFilterBtn(statusValue, testData, actualData)

    console.log('++++++++');
    console.log(inputData);
    console.log('++++++++');



    return (
      <div className="todo-app">
        <AppHeader todoData={this.state.todoData} />
        <div className="top-panel d-flex">
          <SearcPanel serchEngine={this.serchEngine} />
          <ItemStatusFilter 
          status ={testData}
          statusValue = {this.statusValue}
          />
        </div>
        <TodoList
          // todoData={actualData}
          todoData={inputData}
          onDeleted={this.deleteItem}
          addThis={this.addItem}
          onTogleDone={this.onTogleDone}
          onTogleImp={this.onTogleImp}
        />
      </div>
    );
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
