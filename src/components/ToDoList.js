import React, { useState } from 'react'
import TodoItem from './TodoItem';


export default function ToDoList() {

    const [todos,setTodos]=useState([]);
    const [inputValue,setInputValue]=useState('')

    const addTodo=()=>{

            const newTodo={id:Math.random(),text:inputValue};
            setTodos([...todos,newTodo]);
            setInputValue('');
    }


    const removeTodo=(id)=>{

        setTodos(  todos.filter(todo=>todo.id!==id))  //   [,"t2"]

    }
  return (
    <div>
      <h1>Todo Application</h1>

        <form>
            <input type="text"
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}
                    placeholder='Enter task name'
                    style={{display:'block'}}
            />

            <input type="button" onClick={addTodo} value="OK" />
        </form>

        <div>
            {todos.map((todo)=>(
               
               <TodoItem key={todo.id} todo={todo} onRemove={removeTodo} />

            ))}
          </div>
    </div>
  )
}
