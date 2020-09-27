import React, { Component } from "react"


export default class MediaCard extends Component {
  constructor(props){
    super()
  }
  
  render() {
    return (
      <div className="media-cards" style={{width: "50%"}}>
        <div className="title-div">
          <h1>Title: test</h1>
        </div>
        
        <div className="status-div">
          <h4>Status: test</h4>
        </div>

        <div className="type-div">
          <h4>Type: test</h4>
        </div>
            <input placeholder="comment"></input>
      </div>
    )
  }
}