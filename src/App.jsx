import { useEffect, useState } from "react";
import "./App.css";
// import Home from "./Home";
// import About from "./About";
import Contact from "./Contact";
import Profile from "./Profile";
import ToDoList from "./ToDoList";
import Navbar from "./components/Navbar";

// import name of component from file path

// type component

// function component - used
// class component - not used anymore

function App() {
  // useEffect -> lifecycle method in react -> when component is render in the browser
  // this useEffect will run and perform the task

  //  const isUserLoggedIn = false;

  //  function handleSubmit(){
  //   const input = document.getElementById('input').value;
  //   alert(input);
  //  }

  // const [state, setState] = useState("+919837777344")
  // state - variable with initial value 0
  // setState - function to update the value of state

  // function increase(){
  //   setState(state+1)
  // }

  // function decrease(){
  //   setState(state-1)
  // }

  // let data= "+918837789990"

  return (
    // root element
    // fragment
    <>
      {/* 
      <p>{state}</p>

      <button onClick={increase}> increase </button>

      <br/>

      <br/>

      <button onClick={decrease}> decrease </button> */}

      {/* <h6>Hello world</h6>
      <br />
      <input
        type="text"
        placeholder="enter your name"
        className="main_input"
        id="input"
      />
      <br />
      <button className="main_button" onClick={handleSubmit}>Submit</button> */}
      {/* <Home name="test" /> */}

      {/* <About name="mohit" /> */}

      {/* <p>{state}</p>

      <Contact state={state} setState={setState} /> */}

      {/*  ternary condition ? true : false */}
      {/* {
        isUserLoggedIn == true ? <Profile /> : <p>please login !</p>
      } */}

      <ToDoList />
    </>
  );
}

export default App;
