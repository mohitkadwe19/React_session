import React from 'react'
import data from "./data.json";

const Contact = (props) => {
    let {state, setState } = props;

    function handleChange(e){
      setState(e.target.value)
    }

  return (
    <div>
        <h1>Contact</h1>
        <p>Phone number: {state}</p>


        <input name='phone' onChange={handleChange} />

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