import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

class Click extends Component {
  state = {
    count: 0
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <button type="button" onClick={() => { this.setState({ count: count + 1 }) }}>
          click({count})</button>
      </div>
    )
  }
}
function App(props) {

  const [count, setCount] = useState(()=> {
    console.log('useState 我只执行一次') //延迟初始化  
    return props.defaultCount || 0
  })

  return (
    <div>
      <button type="button" onClick={() => { setCount(count + 1) }}>
        click({count})</button>
    </div>
  )

}

export default App;
