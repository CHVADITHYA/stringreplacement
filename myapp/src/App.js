import {Component} from "react";

import "./App.css"

class App extends Component{

  state={inputtext:"",searchString:"",replaceString:""}

  change=(event)=>{
    this.setState({inputtext:event.target.value})
  }

  getunique=(inputtext)=>{
    const words=inputtext
      .toLowerCase()
      .match(/\b\w+\b/g);
    const unique=words?new Set(words):new Set();
    return unique.size;
  }

  getchar=(inputtext)=>{
    const chars=inputtext.replace(/[^a-zA-Z0-9]/g,"");
    return chars.length
  }

  changesearch=(event)=>{
    this.setState({searchString:event.target.value})
  }

  changereplace=(event)=>{
    this.setState({replaceString:event.target.value})
  }

  replace=()=>{
  const {inputtext,searchString,replaceString}=this.state
  if(searchString){
    const updated=inputtext.split(searchString).join(replaceString)
    this.setState({inputtext:updated  })
}
  }

  render(){
    const {inputtext,searchString,replaceString}=this.state
    return(
      <div className="div1">
        <div className="div2">
          <h1 className="heading">Real-Time Text Statistics</h1>
          <textarea rows={15} className="text-area" onChange={this.change} value={inputtext} placeholder="Type your text here...."/>
          <div>
            <p className="para">Unique Words: {this.getunique(inputtext)}</p>
            <p className="para">Characters (excluding spaces and punctuation):{this.getchar(inputtext)}</p>
          </div>
          <div>
            <input
            type="text"
            value={searchString}
            onChange={this.changesearch}
            placeholder="Search string"
            />
            <input
            type="text"
            value={replaceString}
            onChange={this.changereplace}
            placeholder="Replace with"
            />
            <button onClick={this.replace}>Replace All</button>
          </div>
        </div>
        
      </div>
    )
  }
}

export default App;
