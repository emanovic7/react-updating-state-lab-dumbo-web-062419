// Code DigitalClicker Component Here
import React, { Component } from 'react';


class DigitalClicker extends Component {

  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }


  handleButtonClick = () => {
    let count = this.state.timesClicked + 1;
    this.setState({
      timesClicked: count
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.handleButtonClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}


export default DigitalClicker;
