import React, { Component } from "react";
import { connect } from "react-redux";
import { setSortBy } from "../actions/sort";

/**
 * Order the posts by voteScore or date 
 */
class SortControl extends Component {
	changeSortBy = (e) => this.props.setSortBy(e.target.value);

	render() {
		const { sortBy, changeSortBy } = this.props;
		console.log(sortBy);
		return (
			<div className="d-flex align-items-center mt-5">
				<small className="mr-3">Sort By</small>
				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="radio"
						id="radioDate"
						value="date"
						checked={sortBy == "date"}
						onChange={changeSortBy}
					/>
					<label className="form-check-label" htmlFor="radioDate">
						<small>Date</small>
					</label>
				</div>

				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="radio"
						id="radioScore"
						value="score"
						checked={sortBy == "score"}
						onChange={changeSortBy}
					/>
					<label className="form-check-label" htmlFor="radioScore">
						<small>Score</small>
					</label>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SortControl);
