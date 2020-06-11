import React, { Component } from "react";
import { connect } from "react-redux";

class NewPost extends Component {

	state = {
		title: '',
		content: '', 
		author: ''
	}

	setPost = (e) => {
		this.setState({
			[e.target.name]: e.target.value 
		})
	}
	render() {
		return (
			<div>
				<form action="">
					<label htmlFor="title">Title</label>
					<input id="title" type="text" name="title" value={this.state.title} onChange={this.setPost} />
					<label htmlFor="content">Content</label>
					<textarea name="content" id="content" value={this.state.content}  onChange={this.setPost} cols="30" rows="10"></textarea>
					<label htmlFor="author">Author</label>
					<select name="author" id="author" value={this.state.author} onChange={this.setPost} >
					<option value=""></option></select>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
