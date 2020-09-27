import React, { Component } from 'react';
import API from "../utils/API";
import axios from "../utils/API";

export default class CreateNewmedia extends Component {
    constructor(props) {
        super();

        this.onChangeNewmedia = this.onChangeNewmedia.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            newmedia: "",
            type: "",
            status: "",
            media: []
        }
    }

    componentDidMount() {
        this.setState({
            media: [],
            newmedia: "",
            type: "books",
            status: "Not Started"
        })
    }
    onChangeNewmedia(e) {
        this.setState({
            newmedia: e.target.value
        })
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        })
    }

    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const media = {
            newmedia: this.state.newmedia,
            type: this.state.type,
            status: this.state.status,
        }
        console.log(media);

    }

    render() {
        return (
            <div>
                <h3>Add New Media</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Media</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.newmedia}
                            onChange={this.onChangeNewmedia}
                        />
                    </div>
                    <div className="form-group">
                        <label>Media Type</label>
                        <select
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}>
                            <option value="books">Books</option>
                            <option value="movies">Movies</option>
                            <option value="games">Games</option>
                            <option value="show">Show</option>
                            <option value="album">Album</option>
                        </select>

                    </div>
                    <div className="form-group">
                        <label>Progress</label>
                        <select
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChangeStatus}>
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Finished">Finished</option>
                            <option value="Unowned">Unowned</option>
                        </select>
                    </div>


                    <div>
                        <div className="form-group">
                            <input type="submit" value="Create New Media" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}