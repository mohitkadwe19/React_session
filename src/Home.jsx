import React, {useEffect, useRef} from 'react'

const Home = ({ name }) => {

  // console.log(props)

  // object destructuring

  // const { name } = props

  const inputRef = useRef(null)

  console.log(inputRef)


  useEffect(() => {

    // update the value of input field

    inputRef.current.value = "test"

  }, [])

  return (
    <div>
 
      <h1>Home</h1>

      <h2>Welcome to {name}</h2>

    <input type="text" placeholder="enter your name" className="main_input" id="input" ref={inputRef} />
    <button type='button' onClick={()=>{
      inputRef.current.focus()
    }}> focus input</button>

    </div>
  )
}

export default Home