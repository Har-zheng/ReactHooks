import React, { createContext, Component, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

const About = lazy(() => import( /* webpackChunkName: "about" */'./about.jsx'))

// ErrorBoundary
// componentDidCatch
// 捕获未加载的组件或错误
class App extends Component {
  state = {
    hasError: false
  }
  componentDidCatch(){
    this.setState({
      hasError: true,
    })
  }
  render() {
    if(this.state.hasError){
      return <div>error</div>
    }
    return (
      <div>
        <Suspense fallback={<div>loading</div>}>
          <About></About>
        </Suspense>
      </div>
    )
  }
}


export default App;
