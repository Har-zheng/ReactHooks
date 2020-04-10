import React, { Component, useState, PureComponent, useMemo, createContext, useEffect, useContext, memo, useCallback, useRef } from 'react';
import './App.css'

let idSeq = Date.now()
function Control(props) {
  const { addTodo } = props
  const inputRef = useRef()
  const onSubmit = (e) => {
    e.preventDefault();
    const newText = inputRef.current.value.trim()
    if (newText.length === 0) {
      return;
    }
    addTodo({
      id: ++idSeq,
      text: newText,
      complete: false
    })
    inputRef.current.value = ''
  }
  return <div className="control">
    <h1>todos</h1>
    <form onSubmit={onSubmit}>
      <input ref={inputRef} type="text" className="new-todo" placeholder="what needs to be dome?"  />
    </form>
  </div>
}
function Todos() {
  return <div></div>
}

function TodoList() {
  const [todos, setTodos] = useState([])
  const addTodo = useCallback((todo) => {
    setTodos(todos => [...todos, todo])
  }, [])
  const removeTodo = useCallback((id) => {
    setTodos(todos => todos.filter(todo => {
      return todo.id !== id
    }))
  }, []
  )
  const toggleTodo = useCallback((id) => {
    setTodos(todos => todos.map(todo => {
      return todo.id === id ?
        {
          ...todo,
          complete: !todo.complete
        }
        : todo
    }))
  }, [])
  return <div className="todo-list">
    <Control addTodo={addTodo}></Control>
    <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos}></Todos>
  </div>
}

export default TodoList;
