import React from 'react';

let marked = require('marked');
marked.setOptions({
  breaks: true
});

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: defaultText
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
          <div className='text-center border border-dark' style={titleStyle}>
            <h3>Markdown Previewer</h3>
          </div>
          <br />
          <div className="row">
            <div className='col-md-6'>
              <h4 className='text-center border border-dark' style={titleStyle}>Input</h4>
              <textarea id='editor' style={inputStyle} onChange={this.handleChange}>{this.state.text}</textarea>
            </div>
            <div className='col-md-6'>
              <h4 className='text-center border border-dark' style={titleStyle}>Preview</h4>
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
  padding: 10,
  resize: 'none'
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

let defaultText = '# Markdown Previewer\n\n## Welcome to my markdown interpreter.\nYou can check out this project source code [here](https://github.com/RasbeeTech).\n\n This code: \`<div></div>\` has back-ticks around it.  \n \`\`\` \n //Here is an exmaple of multi line code:\n var square = (x) => {\n   return(x*x);\n }\n\`\`\`  \nHere is a list of my favorite programming languages:\n* JavaScript\n* Python\n* Swift\n\n> Blockquotes are very handy in emails to emulate reply text.\n> This line is part of the same quote.\n\nYou may also want to use **bold** text.  \n### Here is an image:  \n![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)';

export default App;
