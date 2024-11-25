import { useState } from 'react'
import './App.css'

interface Todos {
  title: String,
  description: String,
  done: Boolean
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo
        title='todo1'
        description='my todo'
        done={true}

      />
    </>
  )
}

function Todo({ title, description, done }: Todos) {
  return (
    <>
      <h2>{title}</h2>
      <h2>{description}</h2>
      <h2>{done ? 'Completed' : "Pending"}</h2>
    </>
  )
}
export default App
