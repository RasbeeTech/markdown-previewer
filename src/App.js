import './App.css';
import React from 'react';

let marked = require('marked');

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: '# Markdown Previewer'
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
       <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.text),}}>
       </div>
      </div>
    );
  }
  
}

export default App;
