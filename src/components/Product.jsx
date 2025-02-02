import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { increament, decrement, increamentByValue } from '../slice/counterSlice';

const Product = () => {
    const params = useParams()
    console.log(params)
    const {id} = params;

    const dispatch = useDispatch()

    const {count} = useSelector((state) => state.counterReducer)

    function handleIncrement(){
      dispatch(increament())
    }

    function handleDecrement(){
      dispatch(decrement())
    }

    function handleIncrementByValue(e){
      dispatch(increamentByValue(Number(e.target.value)))
    }

  return (
    <div>
        <h1>Product</h1>
        <p>{id}</p>
        <button onClick={handleIncrement}> increment </button>
        <p>{count}</p>
        <button onClick={handleDecrement}> decrement </button>

        <input type='number' onChange={handleIncrementByValue}/>
    </div>
  )
}

export default Product