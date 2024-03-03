import { useState } from 'react';
import './App.css';

function App() {
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState('')
  const [edittodo,setEdittodo] = useState(null)

  const handleinput = (e) =>{
    setTodo(e.target.value)
  }

  const addTodo=()=>{
    const updatedtodo = [...todos]
    if (edittodo == null && todo && (!updatedtodo.includes(todo)) ){
      setTodos([...todos,todo]);
      setTodo('')
    }else if(edittodo !== null && (!updatedtodo.includes(todo)) && todo){
      updatedtodo[edittodo] = todo
      setTodos(updatedtodo)
      setTodo('')
      setEdittodo(null)     
    }else{
      alert('Already used or null value')
    }
  }

  const deletetodo = (index) =>{
    const updatedtodo = [...todos]
    updatedtodo.splice(index,1)
    setTodos(updatedtodo)
  }

  const updateTodo = (index) =>{
    setEdittodo(index)
    setTodo(todos[index])
  }
  
  return (
    <div className="App">
      <div className='mainPart'>

        <h1 className='h1'>Todo</h1>
        <div className='Type'>
          <input value={todo} onChange={handleinput} placeholder={'Type here'} required></input>
          <button onClick={addTodo} >Add</button>
        </div>
      </div>

      {todos.reverse().map((values,index)=>{
        return ( 
        <div key={index} className='h2'>
          {values}  <div className='icons'> <i onClick={()=>updateTodo(index)} class="fa-solid fa-pencil"></i></div><div><i onClick={()=>deletetodo(index)} className="fa-solid fa-trash"></i></div>
        </div> 
        )
      })}
    </div>
  );
}

export default App;
