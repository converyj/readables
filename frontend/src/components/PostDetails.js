import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handlePost } from "../actions/posts";
import Post from "./Post";
import { getComments } from "../actions/comments";
import Comments from "./Comments";

// get the post details and comments for specific post
class PostDetails extends Component {
	componentDidMount() {
		/*
		easier to access single post and comments from api server rather than from store because data is structured differently than the Chirper App data
		 	 - post data is Array > Object rather than tweets data is Object > Object
		*/
		this.props.handlePost(this.props.match.params.id);
		this.props.getComments(this.props.match.params.id);
	}

	render() {
		const { post, comments } = this.props;
		console.log(post);
		return (
			<Fragment>
				<div>
					{!post ? <p>Loading ...</p> : <Post key={post.id} post={post} />}
					{!comments ? <p>Loading...</p> : <Comments comments={comments} />}
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ posts, comments }) => {
	const post = posts.activePost;
	return {
		post,
		comments
	};
};

const mapDispatchToProps = {
	handlePost,
	getComments
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
