import React from 'react'

export default function TodoItem({todo,onRemove}) {
  return (
    <div>
       <span>id:{todo.id}</span>
        <span>Tasks list:{todo.text}</span>
        <button onClick={()=>onRemove(todo.id)}>Remove</button>
    </div>
  )
}
