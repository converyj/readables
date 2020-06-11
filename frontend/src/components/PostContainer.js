/**
 * Holds filter, sortControl, newPostButton, postList, posts 
 */

import React from "react";
import Filter from "./Filter";
import PostsList from "./PostsList";
import SortControl from "./SortControl";
import NewPostButton from "./NewPostButton";
import { PropTypes } from "prop-types";

const PostContainer = ({ posts, sortBy, changeSortBy, filtered }) => {
	return (
		<div className="mt-3 container">
			<Filter filter={filtered} />
			<NewPostButton />
			<SortControl sortBy={sortBy} changeSortBy={changeSortBy} />

			<PostsList posts={posts} sortBy={sortBy} />
		</div>
	);
};

/**
 * category: specific category from CategoryPosts 
 * sortBy: either date/score from Dashboard/CategoryPosts
 * changeSortBy: event to change the sortBy 
 * filtered: specific category from CategoryPosts
 */
PropTypes.PostContainer = {
	// category: PropTypes.string,
	sortBy: PropTypes.string.isRequired,
	changeSortBy: PropTypes.func.isRequired,
	filtered: PropTypes.string.isRequired
};

export default PostContainer;
