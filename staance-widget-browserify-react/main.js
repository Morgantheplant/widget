import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = { n: 0 }
  }
  render () {
    return <div>
      <div> User id: {this.props.uid}</div>
      <h1>clicked {this.state.n} times</h1>
      <button onClick={this.handleClick.bind(this)}>click me!</button>
      <div>Asssertion Number {this.props.aid }</div>
    </div>
  }
  handleClick () {
    this.setState({ n: this.state.n + 1 })
  }
}

createWidgets();

function createWidgets(){
  //create global variable to track which 
  if(!window['staance-widget-data']) window['staance-widget-data'] = [];

    var scripts = document.getElementsByTagName('script'),
    numScripts = scripts.length, re = "staance-sqwidget";
      
    for(var i = 0, el; i < numScripts; i++){
      var el = scripts[i],
      scriptData =  el.getAttribute('data');
      
      if(scriptData && scriptData.match(re) && window['staance-widget-data'].indexOf(el) < 0){
        var widget = getParams(scriptData),
        div = document.createElement('div');
        div.className = "staance-widget"
        window['staance-widget-data'].push(el)
        el.parentNode.insertBefore(div, el);
        //div.innerHTML = 'hello: ' + widget.uid + 'Staance: ' + widget.aid;
        ReactDOM.render(<App aid={ widget.aid } uid={ widget.uid } />, div)
      }
    }
  
}

function getParams(p){
   var params = p.split('/');
   return {
     aid: params[1],
     uid:params[2]
   }
}


