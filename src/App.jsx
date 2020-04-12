import React, { Component, useState, PureComponent, useMemo, createContext, useEffect, useContext, memo, useCallback, useRef } from 'react';
import './App.css'
import  { createSet,createAdd,createRemove,createToggle } from  './actions'
import  reducer from  './reducers.js'
let idSeq = Date.now()



function bindActionCreators(actionsCreators, dispatch) {
    let ret = {}
    for (let key in actionsCreators){
        ret[key] = function (...args) {
            const  actionCreator = actionsCreators[key]
            const  action = actionCreator(...args)
            dispatch(action)
        }
    }
    return ret
}
/*
* 对于函数组件不要忘记使用memo
* React.memo()是一个高阶函数，它与 React.PureComponent类似，但是一个函数组件而非一个类。
* React.memo()可接受2个参数，第一个参数为纯函数的组件，第二个参数用于对比props控制是否刷新，与shouldComponentUpdate()功能类似。
* 1 memo的作用  优化组件 不需要每次更新组件  而是根据需要跟新组件
* */


 const Control = memo(function Control(props) {
  const { addTodo } = props
  const inputRef = useRef()
  const onSubmit = (e) => {
    e.preventDefault();
    const newText = inputRef.current.value.trim()
    if (newText.length === 0) {
      return;
    }
    console.log(newText)
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
})

const TodoItem = memo(function TodoItem(props) {
  const  { todo: {id,text,complete},removeTodo,toggleTodo } = props;
  const  onChange = () => {
      toggleTodo(id)
  }
  const  onRemove = () => {
      removeTodo(id)
  }
  return (
      <li className={"todo-item"}>
        <input type="checkbox" onChange={onChange} checked={complete}/>
        <label className={complete?'complete': ''}>{text}</label>
        <button onClick={onRemove}>&#xd7;</button>
      </li>
  )
})
const Todos = memo(function Todos(props) {
  const  { todos, removeTodo, toggleTodo } = props
  console.log(props)
  return <div>
    <ul className="todos">
      {
        todos.map(todo => {
          return (<TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          ></TodoItem>)
        })
      }
    </ul>
  </div>
})
const  LS_KEY = '_$-todos_'
function TodoList() {
  const [todos, setTodos] = useState([])
  const [ incrementCount, setIncrementCount]  = useState(0)




const  dispatch = useCallback((action) => {
  const state = {
    todos,
    incrementCount
  }
  const setters = {
    todos:setTodos,
    incrementCount:setIncrementCount
  }
  const newState =  reducer(state,action);
  console.log((newState))
  for (let key in newState){
    setters[key](newState[key])
  }
  // todos
  // actions.reduce(function (lastTodos, action) {
  // return [...lastTodos, action.payload]
  // }, todos)
},[todos,incrementCount]);

useEffect(()=> {
    const todos = JSON.parse( localStorage.getItem('LS_KEY') || [])
    // setTodos(todos)
      dispatch(createSet(todos))
  }, [])

  useEffect(()=> {
    localStorage.setItem('LS_KEY', JSON.stringify(todos))
  }, [todos])


  return <div className="todo-list">
    <Control { ...(bindActionCreators({addTodo: createAdd}, dispatch)) }></Control>
    <Todos
        {...(bindActionCreators({removeTodo:createRemove ,toggleTodo: createToggle}, dispatch))}
    todos={todos}></Todos>
  </div>
}

export default TodoList;
