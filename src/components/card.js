import React, { Component } from "react"


export default class MediaCard extends Component {
  constructor(props){
    super()
  }
  
  render() {
    return (
      <div className="project-cards" style={{width: "50%"}}>
        <div className="title-div">
            <h4>Title</h4>
        </div>
        <div className="status-div">

            <p>Status</p>
        </div>

        <div className="type-div">
            <p>Type</p>

        </div>
            <input placeholder="comment"></input>
      </div>
    )
  }
}