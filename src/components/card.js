import React, { Component } from "react"


export default class MediaCard extends Component {
  render() {
    return (
      <div className="project-cards" style={{width: "50%"}}>
            <h4>Title</h4>
            <p>Status</p>
            <p>Type</p>
            <input placeholder="comment"></input>
      </div>
    )
  }
}