// import React, { ChangeEvent, useState } from 'react';
// import {useDispatch , useSelector} from 'react-redux';
// import {increment , decrement , reset , incrementByAmount} from "../../store/features/counterSlice"

// const Counter = () => {
//     const {counter} = useSelector ((state:any)=> state)
//     const dispatch = useDispatch()
//     const [incrementAmount , setIncrementAmount] = useState(0)
//     const {count} = counter
//     const addValue = Number(incrementAmount) || 0;

//     const resetAll = () => {
//       setIncrementAmount(0);
//       dispatch(reset())
//     }
//      console.log({counter,dispatch})
     
//   return (
//     <>
//     <p>{count}</p>
//     <div>
//       <button onClick={()=>dispatch(increment())}> increment </button>
//       <button onClick={()=>dispatch(decrement())}> decrement </button>
//       <input type ="text" value={incrementAmount} onChange={(e: ChangeEvent<HTMLInputElement>)=> setIncrementAmount(e.target.value as any)}/>
//       <button onClick={()=>dispatch(incrementByAmount(addValue))}> amount </button>
//       <button onClick={()=>resetAll()}> reset </button>
//     </div>
//     </>
//   )
// }

// export default Counter
export {}