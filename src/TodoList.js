import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function TodoList(){
    //make a state variable to store the tasts in an array
const [itemList, setItems] = useState([])
//make a state variable for the actual to do items
const [mytasks, setNewTask] = useState("");



//event handler for addin the new items
function handleInput(event){
    setNewTask(event.target.value);//update new task states with the new value
}

const handleSumbit = (e) => { //handle submission event
    e.preventDefault();// prevent the default way of adding stuff
    setItems([...itemList,mytasks]);//Adds a new task to the itemList array by creating a new array and appendging the task
    setNewTask("");//return the input back to an empty array after submission

};

    return(
<>


<Form onSubmit={handleSumbit}> 
    <input
    type="text"
    value={mytasks}
    onChange={handleInput}
    placeholder="add  a task"
    />
    <Button variant="success" type="submit">submit</Button>
    </Form>
    

<ul>
   {itemList.map((mytasks, index) => (<li key = {index}>{mytasks}</li>))}

</ul>


</>


    );
};
export default TodoList;