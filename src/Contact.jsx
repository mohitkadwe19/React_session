import React, { useState } from 'react'
import data from "./data.json";
import { useNavigate } from "react-router";
import { useContext } from 'react';
import { MyContext } from './App';
import { useSelector } from 'react-redux';

const Contact = () => {
    const [state, setState] = useState('')

    const navigate = useNavigate();

    function handleChange(e){
      setState(e.target.value)
    }

    function handleSubmit(){
      setState('')
      navigate('/')
    }

    const {myData, setData} = useContext(MyContext);

    function handleEmailChange (e){
      const email = e.target.value;
      console.log(email);
      setData({...myData, email: email})
    }

    const {count} = useSelector((state) => state.counterReducer)

  return (
    <div>
        <h1>Contact</h1>
        <p>email : {myData.email}</p>
        <p>Phone number: {state}</p>
        <p>Count: {count}</p>


        <input name='phone' onChange={handleChange} />

        <br />
        <br />

        <input name='email' onChange={handleEmailChange} placeholder='email' />

       <br />
       <br />

        <button type='button' onClick={handleSubmit}>Submit</button>

      {/* {
        data.map((item,index)=>{
            return(
                <div key={index}>
                    <h1>{item.name}</h1>
                    <p>{item.job}</p>
                </div>
            )
        })
      } */}

    </div>
  )
}

export default Contact