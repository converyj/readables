import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import handleInitialData from "./../actions/shared";
import { getAllPosts, getAllCategories } from "./../utils/PostsAPI";
import { recievePosts } from "./../actions/posts";
import Category from "./Category";
import Header from "./Filter";
import PostsList from "./PostsList";
import Router from "./Router";
import { getInitialData } from "./../utils/api";
import Filter from "./Filter";
import NewPost from "./NewPostButton";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		return (
			<div className="container">
				<Router />
			</div>
		);
	}
}

const mapDispatchToProps = {};

export default connect()(App);
