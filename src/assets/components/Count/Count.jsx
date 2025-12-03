import { useState } from "react"
import "./count.css"

export const Count = ({btnText, onConfirm}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
      setCount((prev) =>  prev +1)
    }

    const  decrement = () => {
    
      setCount((prev) =>  (prev > 0? prev - 1  : 0))
    }

    const confirm = () => {
      if (count > 0) {
        onConfirm(count)
      } 
    }

    return <div className="">
        <div>
            <button onClick={decrement} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
            <button onClick={confirm} disabled={count === 0}>{btnText}</button>
    </div>
}