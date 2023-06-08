import React from 'react';
import "./styles.css";
import { Todo } from '../model';
import SingleToDo from './SingleToDo';


interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const ToDoList:React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
        {todos.map(todo=> <SingleToDo todo={todo} key={todo.id}/>)}
    </div>
  )
}

export default ToDoList