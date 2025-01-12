import React from 'react'
import data from './data.json';

 const About = (props) => {

    const person = {
        name: 'John Doe',
        age: 25,
    }

    const student = [1,1,1,1,1,1,1,1,1]

    console.log(data)

  return (
    <div>
        <h1>About</h1>
        <p>this is my name {props.name}</p>

        <p> name {person.name} </p>
        <p> age {person.age} </p>


       {/* {
        student.map((item,index)=>
        <p key={index}> {item} </p>
        )
       } */}

       {
         data.map((item,index)=>(
             <div key={index}>
                 <h1>{item.name}</h1>
                 <p>{item.job}</p>
             </div>
         ))
       }

    </div>
  )
}

export default About
