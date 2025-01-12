import React, { useState } from 'react'
import './App.css'
const ToDoList = () => {

    const [todos, setTodos] = useState([]);

    const [input, setInput] = useState("");

    function handleInput(e){
        setInput(e.target.value);
    }


    function handleSubmit(e){
        e.preventDefault();

        // spread operator -> ...  copy the existing array and add the new value
        setTodos([...todos, input]);
    }


    function handleDelete(ele_index){

      const res =   todos.filter((element,index,array)=>{
        console.log("element",element);
           return index !== ele_index;
  })

        console.log("res",res);
        console.log("todos",todos);

        setTodos(res);

    }

  return (
    <div>

        <h1>To Do List</h1>
     

       <form>
        <label htmlFor="input">Enter Task</label>
        <br />
        <br />
        <input type="text" id="input" onChange={handleInput} />

        <br />

        <br />

        <button onClick={handleSubmit}>Submit</button>
       </form>


<br/>   

<br/>   

<br/>   
       <div>

        {
            todos.map((item,index)=>{
                return(
                    <div key={index} className='todo'>
                        <p>{item}</p>
                        <button onClick={()=>handleDelete(index)}>delete</button>
                        <br/>   
                    </div>
                )
            })
        }

       </div>


    </div>
  )
}

export default ToDoList