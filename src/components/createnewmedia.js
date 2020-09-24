import React, { Component } from 'react';

export default class CreateNewmedia extends Component {
    constructor(props) {
        super(props);

        this.onChangeNewmedia = this.onChangeNewmedia.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeProgress = this.onChangeProgress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            newmedia: "",
            type: "",
            progress: ""
        }
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

    onChangeProgress(e) {
        this.setState({
            progress: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const media = {
            newmedia: this.state.newmedia,
            type: this.state.type,
            progress: this.state.type
        }

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
                            value={this.state.progress}
                            onChange={this.onChangeProgress}>
                            <option value="needtowatch">Need to Watch</option>
                            <option value="inprogress">In Progress</option>
                            <option value="finished">Finished</option>
                        </select>

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create New Media" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}