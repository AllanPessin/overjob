import { useState } from "react"

export default function Login() {
  
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Aumentar: {counter}</button>
    </div>
  )
}
