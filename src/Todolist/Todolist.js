import React, { useState } from 'react'
import "./Todo.css";
import NewTodo from './NewTodo';

const Todolist = () => {

const [inputList, SetInputList] = useState("");
const [Items, setItems] = useState([]);

const itemEvent = (event) => {
SetInputList(event.target.value);
};


const listOfItems = () => {
  setItems((oldItems) => { 
  return [...oldItems, inputList];
});
SetInputList ("");
};

const deleteItems = (id) =>{
  console.log ('deleted')
  setItems((oldItems) => {
    return oldItems.filter((arrElement, index)=> {
return index !== id;
    })
  })
};


  return<>
<div className='main_div'>
  <div className='center_div'>
    <br/>
    <h1> Todo List</h1>
    <br/>
    <input type="text" placeholder='Add Items' 
    value={inputList}
    onChange={itemEvent}/>
    <button onClick={listOfItems}> + </button>
    <ol>
      {/* <li> {inputList} </li> */}
     { Items.map( (itemval, index) => {
       return <NewTodo
       key={index} id={index} text = { itemval}
       onSelect = {deleteItems}
        />
      })}
    </ol>
  </div>


</div>

  </>
};


export default Todolist;