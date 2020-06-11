import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewPostButton extends Component {
	render() {
		return (
			<div className="float-right">
				<Link to="/new" type="button" className="btn btn-success">
					New Post
				</Link>
			</div>
		);
	}
}
