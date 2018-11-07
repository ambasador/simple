import React, { Component } from 'react';


class App extends Component {

  handleClick = (e) => {
    e.preventDefault();
    const ele = this.refs.ele;
    setTimeout(() => {
        ele.classList.toggle('active');
      }, 500);
  }
  render() {
    return (
      <div className="App">
	     <button onClick={this.handleClick.bind(this)}>Click me</button>
       <div className="test" ref="ele">test</div>
      </div>
    );
  }
}

export default App;
