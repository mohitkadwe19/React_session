import React, { useState } from 'react'
import data from "./data.json";
import { useNavigate } from "react-router";


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

  return (
    <div>
        <h1>Contact</h1>
        <p>Phone number: {state}</p>


        <input name='phone' onChange={handleChange} />

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