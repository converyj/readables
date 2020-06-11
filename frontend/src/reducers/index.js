import { combineReducers } from "redux";

import categories from "./categories";
import comments from "./comments";
import posts from "./posts";
import sortBy from "./sort";
import activePost from "./activePost";

export default combineReducers({
	categories,
	comments,
	posts,
	activePost,
	sortBy
});
