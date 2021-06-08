import React, { Component } from 'react';
import './../css/App.css'
import ColorPicker from './ColorPicker';
import Reset from './Reset';
import Result from './Result';
import SizeSetting from './SizeSetting';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      color: "red",
      fontSize: 14
    }
  }
  onRecieveColor = (color) =>  {
    this.setState({
      color: color
    })
  }
  onChangeSize = (value) => {
    this.setState({
      fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize
    })
  }
  onResetDefault = (value) => {
    if(value){
      this.setState({
        color: "red",
        fontSize: 14
      })
    }
  }


  render() {
    return (
          <div className="container">
            <div class="row mt-3">
              <ColorPicker color={this.state.color} onRecieveColor={this.onRecieveColor}/>
              <SizeSetting onChangeSize={this.onChangeSize} fontSize={this.state.fontSize}/>
              <Reset onResetDefault={this.onResetDefault}/>
              <Result color={this.state.color} fontSize={this.state.fontSize}/>
            </div>
          </div>
    );
  }
}

export default App;