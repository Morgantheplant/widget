import React from 'react'
import ReactDOM from 'react-dom'

// babel transform allows es6 features and module bundling

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
  //create global to track which scripts have already been loaded
  if(!window['staance-widget-data']){
    window['staance-widget-data'] = [];
    //import staance css
    require('./public/staance-widget-styles.min.css')
  }
    var scripts = document.getElementsByTagName('script'),
    numScripts = scripts.length, re = "staance-widget";
      
    for(var i = 0, el; i < numScripts; i++){
      var el = scripts[i],
      scriptData =  el.getAttribute('data');
      //if data on script tag matches and hasn't yet been added to the global 
      if(scriptData && scriptData.match(re) && window['staance-widget-data'].indexOf(el) < 0){
        var widget = getParams(scriptData),
        div = document.createElement('div');
        div.className = "staance-widget";
        div.id = createUniqueId()
        window['staance-widget-data'].push(el)
        el.parentNode.insertBefore(div, el);
        
        ReactDOM.render(<App aid={ widget.aid } uid={ widget.uid } />, div)
      }
    }
  
}

function createUniqueId() {
    var text = "staance-widget",
        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        length = 5;

    for(var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return document.getElementById(text) ? makeUniqueId() : text;
};


function getParams(p){
   var params = p.split('/');
   return {
     aid: params[1],
     uid:params[2]
   }
}


