import React, { createContext, Component,PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

class Foo extends PureComponent {
  // 生命周期函数
  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextProps.name === this.props.name){
  //     return false 
  //   }
  //   return true
  // }
  render() {
    return (
      <div>
        {console.log('Foo rnder')}
        <div>{this.props.person.age}</div>
      </div>
    )
  }
}


class App extends Component {
  state = {
    count: 0,
    person: {
      age: 1
    }
  }
  render() {
    const { person} = this.state
    return (
      <div>
        <button onClick={() =>{
           person.age++
           this.setState({
             person
           })
          }}>add</button>
        <Foo person={ person} name="Mike" ></Foo>
      </div>
    )
  }
}



export default App;
