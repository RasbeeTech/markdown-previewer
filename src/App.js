import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({text: event.target.value});
  }
  render(){
    return (
      <div className="App">
       <textarea id='editor' onChange={this.handleChange}></textarea>
       <div id='preview'>
         <p>{this.state.text}</p>
       </div>
      </div>
    );
  }
  
}

export default App;
