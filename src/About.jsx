import React from "react";
import data from "./data.json";
import { useReducer } from "react";

const About = (props) => {
  // const person = {
  //     name: 'John Doe',
  //     age: 25,
  // }

  // const student = [1,1,1,1,1,1,1,1,1]

  // console.log(data)

  function reducer(state, action){
    switch(action){
      case 'increment':
        return  state + 1;
      case 'decrement':
        return state - 1;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, 0);

  function increment(){
    dispatch('increment');
  }

  function decrement(){
    dispatch('decrement');
  }

  return (
    <div>
      <h1>About</h1>
      {/* <p>this is my name {props.name}</p>

        <p> name {person.name} </p>
        <p> age {person.age} </p> */}

      {/* {
        student.map((item,index)=>
        <p key={index}> {item} </p>
        )
       } */}

      {/* {
         data.map((item,index)=>(
             <div key={index}>
                 <h1>{item.name}</h1>
                 <p>{item.job}</p>
             </div>
         ))
       } */}

      <button type="button" name="increment" onClick={increment}>
        +
      </button>
      <br />
      <p>{state}</p>
      <br />
      <button type="button" name="decrement" onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default About;
