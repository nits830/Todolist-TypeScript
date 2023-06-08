import React from 'react'
import './styles.css'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(event:React.FormEvent)=>void
}

const InputField:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form className='input' onSubmit={handleAdd}>
        <input type='input' 
        value={todo}
        onChange={(event)=>setTodo(event.target.value)}
        placeholder='Add Task' className='input_box'/>
        <button className='input_submit' type='submit' 
>
        Go
        </button>
    </form>
  )
}

export default InputField