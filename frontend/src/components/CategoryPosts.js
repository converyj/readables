import React, { Component } from "react";
import PostContainer from "./PostContainer";
import { connect } from "react-redux";
import { setSortBy } from "../actions/sort";
import { PropTypes } from "prop-types";

/*
Pass the selected category to PostContainer
*/
class CategoryPosts extends Component {
	/**
	 * sortBy: either date/votescore 
	 * match: access to router url 
	 */
	static propTypes = {
		sortBy: PropTypes.string.isRequired,
		match: PropTypes.object
	};
	changeSortBy = (e) => this.props.setSortBy(e.target.value);

	render() {
		return (
			<div>
				<PostContainer
					posts={this.props.posts}
					filtered={this.props.match.params.category}
					sortBy={this.props.sortBy}
					changeSortBy={this.changeSortBy}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ posts, sortBy }, { match }) => {
	console.log(posts);
	const postsByCategory = Object.values(posts).filter(
		(postId) => postId.category === match.params.category
	);

	return {
		posts: postsByCategory,
		sortBy
	};
};

export default connect(mapStateToProps, { setSortBy })(CategoryPosts);
