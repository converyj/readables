import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import Category from "./Category";
import PostsList from "./PostsList";
import { PropTypes } from "prop-types";

/**
 * Show list of categories
 * Highlight the category of poll 
 */

const activeBtn = "btn btn-danger";
const defaultBtn = "btn btn-outline-secondary";

class Filter extends Component {
	/**
	 * filter: specific category 
	 * category: each category 
	 */
	static propTypes = {
		filter: PropTypes.string,
		category: PropTypes.array.isRequired
	};

	state = {
		active: this.props.filter
	};

	clickHandler = (filter) => {
		this.setState({ active: filter });
	};

	styleButton = (filter) => (this.state.active === filter ? activeBtn : defaultBtn);

	render() {
		console.log(this.state.active);
		const { category } = this.props;
		// console.log(this.props);

		const renderLinks = category.map((filter) => (
			<Link
				className={this.styleButton(filter.name)}
				to={`/${filter.path}`}
				key={filter.path}
				onClick={() => this.clickHandler(filter.name)}>
				{filter.name}
			</Link>
		));

		return (
			<div className="d-flex justify-content-start align-items-center">
				<Link
					className={this.styleButton("all")}
					to="/"
					onClick={() => this.clickHandler("all")}>
					All
				</Link>
				{renderLinks}
			</div>
		);
	}
}

Filter.defaultProps = {
	filter: "all"
};

const mapStateToProps = ({ categories }) => {
	const category = Object.values(categories).map((id) => ({
		key: id,
		name: id.name,
		path: id.path
	}));

	return {
		category
	};
};
const mapDispatchToProps = {};

export default connect(mapStateToProps)(Filter);
