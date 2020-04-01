import React, { Component, useState, PureComponent, useMemo, createContext, useEffect, useContext, memo, useCallback, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

// const CountContext = createContext();



//  const Counter = memo(function Counter(props) {
//    console.log('Counter memo')
//   return (
//     <h1 onClick={props.onClick}>{props.count}</h1>
//   )
// })

function useCounter(count) {
  const size = useSize()
  return (
  <h1 >{count} width{size.width} height:{size.height}</h1>
  )

}

function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount);
  const it = useRef()
  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
  }, [])
  useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current)
    }
  })
  return [count, setCount]
}


function useSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])
  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [onResize])
  return size
}


function App(props) {
  const [count, setCount] = useCount(0)
  const Counter = useCounter(count);
  const size = useSize();
  /**
   * Memo  决定一个组件是否重新执行
   */
  //  useMemo  决定 一段函数 逻辑是否重新执行   当依赖数组变化时 useMemo一定执行 (反之未必)
  /**
   * 如果useMemo  返回值是函数  可以简写成 useCallback的形式
   */
  return (
    <div>
      <button type="button" onClick={() => { setCount(count + 1) }}>
        click({count})   </button>
        <h1>width {size.width}height:{size.height}</h1>
       
      {
        Counter
      }
    </div>
  )

}

// useEffect  包含的生命周期
export default App;
