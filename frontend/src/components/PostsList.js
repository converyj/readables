import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import Filter from "./Filter";
import NewPost from "./NewPostButton";
import { PropTypes } from "prop-types";

/**
 * contains the posts by category or all posts 
 */
class PostsList extends Component {
	/**
	 * postsByCategory: all posts or specific posts
	 * sortBy: sort by date/votescore
	 */
	static propTypes = {
		// postsByCategory: PropTypes.array.isRequired,
		sortBy: PropTypes.string.isRequired
	};
	// sort function by date/votescore
	sortedPosts(posts) {
		if (this.props.sortBy === "date") {
			let sortedByTime = Object.values(posts).sort((a, b) => {
				return b.timestamp - a.timestamp;
			});
			return sortedByTime;
		}
		else if (this.props.sortBy === "score") {
			let sortedByVotes = Object.values(posts).sort((a, b) => {
				return b.voteScore - a.voteScore;
			});
			return sortedByVotes;
		}
	}

	render() {
		console.log(this.props);

		const { posts } = this.props;
		return (
			<div>{this.sortedPosts(posts).map((post) => <Post key={post.id} post={post} />)}</div>
		);
	}
}

/**
 * get the posts of category passed from CategoryPosts Component; if doesn't exist set it to all posts 
 */

const mapDispatchToProps = {};

export default connect()(PostsList);
