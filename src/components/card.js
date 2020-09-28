import React, { Component } from "react"
import Moment from "react-moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faFilm, faGamepad, faMusic, faTv } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"



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

        <div className="date-div">
          <p>Date: { <Moment format="YYYY/MM/DD"></Moment>}</p>
        </div>
            <input placeholder="comment"></input>
      </div>
    )
  }
}