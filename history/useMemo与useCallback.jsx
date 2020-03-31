import React, { Component, useState, useMemo,createContext,useContext,memo, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

const CountContext = createContext();


 const Counter = memo(function Counter(props) {
   console.log('Counter memo')
  return (
    <h1 onClick={props.onClick}>{props.count}</h1>
  )
})

function App(props) {

  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const double = useMemo(() => {
    return count * 2
  }, [count])     
 
  // const onClick = () => {
  //   console.log('Click')
  // }
  const onClick = useCallback(() => {
    console.log('Click')
    setClickCount((clickCount) => clickCount+1)
  }, [])
  /**
   * Memo  决定一个组件是否重新执行
   */
//  useMemo  决定 一段函数 逻辑是否重新执行   当依赖数组变化时 useMemo一定执行 (反之未必)
/**
 * 如果useMemo  返回值是函数  可以简写成 useCallback的形式
 */
  const half = useMemo(() => {
    return double/4
  }, [double])

  return (
    <div>
      <button type="button" onClick={() => { setCount(count + 1) }}>
        click({count}) , double: ({double})  </button>
      <Counter count={count} onClick={onClick}></Counter>
    </div>
  )

}

// useEffect  包含的生命周期
export default App;
