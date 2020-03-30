import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {

  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }
  useEffect(() => {
    console.log('count', count)
  }, [count]) // 传入检测的变量  当发生变化时  会执行

  useEffect(() => {
    document.title = count;
  }) // 不传数组一直执行
  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [])
  //  空数组只执行一次
  const onClick = () => {
    console.log('click')
  }
  // 副作用
  useEffect(() => {
    document.querySelector('#size').addEventListener('click', onClick, false);
    return ()=> {
      document.querySelector('#size').removeEventListener('click', onClick, false);
    }
  })

  return (
    <div>
      <button type="button" onClick={() => { setCount(count + 1) }}>
        click({count})</button>
      {
        count % 2 ? <span id="size">Size: {size.width}X{size.height}</span> :
          <p id="size">Size: {size.width}X{size.height}</p>

      }

    </div>
  )

}
// useEffect  包含的生命周期
export default App;
