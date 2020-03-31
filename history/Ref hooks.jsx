import React, { Component, useState, PureComponent, useMemo, createContext, useEffect, useContext, memo, useCallback, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

const CountContext = createContext();



//  const Counter = memo(function Counter(props) {
//    console.log('Counter memo')
//   return (
//     <h1 onClick={props.onClick}>{props.count}</h1>
//   )
// })

class Counter extends PureComponent {
  speak() {
    console.log(`now counter is ${this.props.count}`)
  }
  render() {
    const { props } = this
    return (
      <h1 onClick={props.onClick}>{props.count}</h1>
    )
  }
}

function App(props) {

  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const counterRef = useRef()
  const double = useMemo(() => {
    return count * 2
  }, [count])
  const it =useRef()

  // const onClick = () => {
  //   console.log('Click')
  // }
  const onClick = useCallback(() => {
    console.log('Click')
    setClickCount((clickCount) => clickCount + 1)
    counterRef.current.speak()
  }, [counterRef])
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
  /**
   * Memo  决定一个组件是否重新执行
   */
  //  useMemo  决定 一段函数 逻辑是否重新执行   当依赖数组变化时 useMemo一定执行 (反之未必)
  /**
   * 如果useMemo  返回值是函数  可以简写成 useCallback的形式
   */
  const half = useMemo(() => {
    return double / 4
  }, [double])

  return (
    <div>
      <button type="button" onClick={() => { setCount(count + 1) }}>
        click({count}) , double: ({double})  </button>
      <Counter ref={counterRef} count={count} onClick={onClick}></Counter>
    </div>
  )

}

// useEffect  包含的生命周期
export default App;
