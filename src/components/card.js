import React, { Component } from "react"
import Moment from "react-moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faFilm, faGamepad, faMusic, faTv } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import API from "../utils/API"




export default class MediaCard extends Component {
  constructor(props) {
    super()
    // works as expected, returns an object from the db
    console.log(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    status: "",
    comment: ""
  }

  componentDidMount() {
    this.setState({
      status: this.props.status,
      comment: this.props.comment
    })
  }

  onChangeStatus = (event) => {
    console.log(event.target.value);
    console.log(event.target.id);

    const update = {
      status: event.target.value
    }

    API.updateMedia(event.target.id, update)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    this.setState({
      status: event.target.value
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // when the submit button is clicked, send the data to the back end
  // the response 
  handleSubmit(event) {
    event.preventDefault();
    console.log("a comment was submitted: " + this.state.value);
    const comment = {
      comment: event.target.value
    }
    API.addComment(event.target.id, comment)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

    this.setState({
      comment: event.target.value
    })
  }

  render() {

    const icons = {
      "book": faBook,
      "movie": faFilm,
      "album": faMusic,
      "show": faTv,
      "game": faGamepad
    }

    // works as expected, returning types of media 
    console.log(this.props.type);

    let media_type = null;
    console.log(media_type);

    // checks type on prop against icons object, media_type set equal to key with matching value
    // *ignore now see subsequent comment* media_type currently coming back as undefined !!!!!!!!!! work here !!!!!!!!!
    // okay for some reason now it does indeed return an object from fontawesome, icon doesn't show up though
    // i don't think it's expecting what is being passed in
    // for 9/28/20 test: hard code fontawesome icon names to see if they're valid
    media_type = icons[this.props.type]
    console.log(media_type);



    return (
      <div className="media-cards" id={this.props.mongoid} style={{ width: "50%" }}>
        <div className="title-div">
          <a>{this.props.title}</a>
        </div>

        <div className="status-div">
        <label>Status: </label>
          <select
            className="form-control"
            value={this.state.status}
            onChange={this.onChangeStatus}
            id={this.props.mongoid}>
            <option value="Unowned">Unowned</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Finished">Finished</option>
          </select>
        </div>

        <div className="type-div">
          <p>Type: {this.props.type}</p>
          <i className="fa-5x"><FontAwesomeIcon icon={media_type} /></i>
        </div>

        <div className="date-div">
          <p>Date: {<Moment format="YYYY/MM/DD"></Moment>}</p>
        </div>
        
        <form id={this.props.id} onSubmit={this.handleSubmit}>
          <input className="comment" value={this.state.comment} onChange={this.handleChange} placeholder="comment"></input> 
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}