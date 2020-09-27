import React, { Component } from "react"


export default class MediaCard extends Component {
  constructor(props){
    super()
  }
  
  render() {
    return (
      <div className="media-cards" style={{width: "50%"}}>
        <div className="title-div">
            <h4>{this.props.title}</h4>
        </div>
        
        <div className="status-div">
            <p>Status: {this.props.status}</p>
        </div>

        <div className="type-div">
            <p>Type: {this.props.type}</p>
        </div>
            <input placeholder="comment"></input>
      </div>
    )
  }
}