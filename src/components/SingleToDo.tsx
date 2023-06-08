import React from 'react'
import { Todo } from '../model'
import "./styles.css"

interface Props{
    todo:Todo
}
const SingleToDo:React.FC<Props> = ({todo}) => {
  return (
    <div className="singleToDo">
        {todo.todo}
        </div>
  )
}

export default SingleToDo