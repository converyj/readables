import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import Category from "./Category";
import PostContainer from "./PostContainer";
import Router from "./Router";
import Filter from "./Filter";
import NewPostButton from "./NewPostButton";
import { setSortBy } from "../actions/sort";

/**
 * Show PostContainer passing the sortBy and allPosts without being filtered 
 * event to change the sortBy in store 
 */

class Dashboard extends Component {
	changeSortBy = (e) => this.props.setSortBy(e.target.value);

	render() {
		const { sortBy, posts } = this.props;

		return (
			<div>
				<PostContainer sortBy={sortBy} posts={posts} changeSortBy={this.changeSortBy} />
			</div>
		);
	}
}

/**
 * get the sortBy state 
 */
const mapStateToProps = ({ sortBy, posts }) => ({
	sortBy,
	posts
});

export default connect(mapStateToProps, { setSortBy })(Dashboard);
