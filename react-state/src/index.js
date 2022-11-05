// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import React, { Component } from 'react'

class First extends Component {
  render() {
    console.log("first",this);
    return (
      <div>First Component {this.props.feature}</div>
    )
  }
}


class Sample extends Component {
  constructor (){
    super();
    console.log("constructor",this);
    this.state = {
      feature:"react State",
      age:4,
    };
  }

  updatefun = (val) => {
    console.log(val);
    this.setState({feature:val,age:54});
  };

  render() {
    return (
      <div>
        {this.state.feature}
        {this.state.age}
        <button onClick={()=> this.updatefun ("React JS")}>Update</button>
        <First feature={this.state.feature}/>
        </div>
    )
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sample />
  </React.StrictMode>
);
