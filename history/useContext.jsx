import React, { Component, useState,createContext,useContext } from 'react';
import logo from './logo.svg';
import './App.css';

const CountContext = createContext();


 class Foo extends Component {
  render() {
    return (
      <div>
        <CountContext.Consumer>
          {
            count => <h1>{count}</h1>
          }
        </CountContext.Consumer>
      </div>
    )
  }
}

class Bar extends Component {
  static  contextType = CountContext;
  render() {
    const count = this.context;
    return (
      <div>
        <h1>{count}</h1>
      </div>
    )
  }
}

function Counter(){
  const count = useContext(CountContext)
  return (
  <h1>{count}</h1>
  )
}



function App(props) {

  const [count, setCount] = useState(0);


  return (
    <div>
      <button type="button" onClick={() => { setCount(count + 1) }}>
        click({count})</button>
      <CountContext.Provider value={count}>
        <Foo></Foo>
        <Bar></Bar>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  )

}

// useEffect  包含的生命周期
export default App;
