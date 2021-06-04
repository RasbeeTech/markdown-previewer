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
        <div className='container-fluid'>
          <h1 className='text-center'>Markdown Previewer</h1>
          <br />
          <div className="row">
            <div className='col-lg-6'>
              <h2 className='text-center' style={titleStyle}>Input</h2>
              <textarea id='editor' style={inputStyle} onChange={this.handleChange} placeholder={this.state.text}></textarea>
            </div>
            <div className='col-lg-6'>
              <h2 className='text-center' style={titleStyle}>Preview</h2>
              <div id='preview' style={outputStyle} className='border bg-light' dangerouslySetInnerHTML={{__html: marked(this.state.text),}} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

let inputStyle = {
  minWidth: '100%',
  height: '70vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 10
};

let outputStyle = {
  midWidth: '100%',
  height: '70vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 10,
  overflowY: 'auto'
};

let titleStyle = {
  backgroundColor: '#18b500'
}

export default App;
