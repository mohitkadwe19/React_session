import "./App.css";
// import Home from "./Home";
// import About from "./About";
import Contact from "./Contact";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Footer from "./components/Footer.jsx";
import Product from "./components/Product.jsx";
import { createContext, useState } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

export const MyContext = createContext();

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

  const [myData, setData] = useState({
    username: "admin",
    email: "admin@gmail.com",
  });

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

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

      {/* this is context provider that helps you provide the data to all the component */}
      <MyContext.Provider
        // value have the initial value of the context that you want to provide to all the components
        value={{ myData, setData, user, setUser }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
