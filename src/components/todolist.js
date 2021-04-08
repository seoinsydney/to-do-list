import React, { useState } from 'react';
import './todolist.scss';
import { Button } from 'react-bootstrap';
import { IoIosClose } from 'react-icons/io';

const ToDoList = () => {

    const [todolist, setTodolist] = useState([]);
    // { id: Math.random(), listItem: ''}
    const [newInputValue, setNewInputValue] = useState('');


    const addToDoList = () => {
        if( document.getElementById('newinput').value == ''){
            alert("Please enter an item");
        } else {
        // saving tada into todolist
        setTodolist( [...todolist, {id:Math.random(), listItem:newInputValue}] );
        // reset the value of input
        document.getElementById('newinput').value = null;
        // reset the value of state variable
        setNewInputValue(null);
        }
    }

    const onChangeItemList = (e) => {
        // state variable is getting the data from input when I change the input
        setNewInputValue(e.target.value);
    }

    const deleteItemList = (deleteItemId) => {
        console.log("you deleted:" + deleteItemId);
        setTodolist(todolist.filter(item => item.id !== deleteItemId));
    }

    return (
        <div className="todolist">
            <h1>To Do List</h1>
            <p>Please add your items</p>
            <section>

                <input id="newinput" type="text" 
                placeholder="add item.."
                onChange={onChangeItemList}
                ></input>

                <Button 
                    variant="dark"
                    type="button"
                    onClick={ () => addToDoList() }
                >Add list</Button>
            </section>

            <ul>
                {todolist.map((item) => 
                <li key={item.id}>{item.listItem}
                <IoIosClose onClick={() => deleteItemList(item.id)} />
                </li>
                )}
            </ul>
        </div>
    )
}

export default ToDoList;
