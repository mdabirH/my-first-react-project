import React, { useState } from 'react'

import Todos from './Todos'

import style from './Home.module.css';

import { NewTodo } from './NewTodo';
import{v4 as uuidv4}from 'uuid';


const Home = () => {
    const [todos,setTodos]=useState([]);

    const  handleTodo =(todo)=>{
      setTodos((prevTodos)=>{
        return [...prevTodos,{id: uuidv4(),todo}];
      })
      console.log( todos);

    };
    const handleRemoveTodo=(id)=>{
   
    setTodos((prevTodos)=>{
      const filteredTodo =prevTodos.filter((todo)=>todo.id !==id);
      return filteredTodo;
    });
    
    }
  return (
    <div className={style.container}>
        <h1>Todo App</h1>
        <NewTodo onAddTodo={handleTodo}/>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
        </div>
  )
}

export default Home