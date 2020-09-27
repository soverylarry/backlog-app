import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import "react-datepicker/dist/react-datepicker.css";
import API from "../utils/API"

export default class CreateNewmedia extends Component {
    constructor(props) {
        super(props);

        this.onChangeNewmedia = this.onChangeNewmedia.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            newmedia: "",
            type: "",
            status: "",
            date: new Date(),
            media: []
        }
    }

    componentDidMount() {
        this.setState({
            media: [],
            newmedia: 'test'
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
            progress: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const media = {
            newmedia: this.state.newmedia,
            type: this.state.type,
            status: this.state.status,
            date: this.state.date
        }
        console.log(media);

        window.location = '/';
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
                            <option value="books">Other Media</option>
                        </select>

                    </div>
                    <div className="form-group">
                        <label>Progress</label>
                        <select
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChangeStatus}>
                            <option value="notstarted">Not Started</option>
                            <option value="inprogress">In Progress</option>
                            <option value="finished">Finished</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
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