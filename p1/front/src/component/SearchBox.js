
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

constructor(props){
  super(props);
}

onKeyPress(evt)
{

  if(evt.key == "Enter")
  {
    this.props.onSearch(evt.target.value);
  }
}

render(){
return ( <div className ="sarchBox">
<input type = "text" 
ref  = {(input) => this.input = input} 
defaultValue = {this.props.user}
onKeyPress = {this.onKeyPress.bind(this)}/>
</div>);
}
}

SearchBox.propTypes = {
  onSearch: propTypes.func.isRequired, 
  user: propTypes.string.isRequired
};
export default SearchBox

