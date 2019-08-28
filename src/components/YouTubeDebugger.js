// Code YouTubeDebugger Component Here
import React, { Component } from 'react';


class YouTubeDebugger extends Component {

  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
          }
        }
      }
  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
    console.log(this.state)
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }



  render(){
    return(
      <div>
        <button className="resolution" onClick={this.handleResolutionClick}>{this.state.settings.video.resolution}</button><br/ >
        <button className="bitrate" onClick={this.handleBitrateClick}>{this.state.settings.bitrate}</button>
      </div>
    )
  }
}


export default YouTubeDebugger;
