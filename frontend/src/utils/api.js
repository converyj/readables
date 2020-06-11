import { getAllCategories, getAllPosts, getPost } from "./PostsAPI";
import { recievePosts } from "../actions/posts";
import { recieveCategories } from "../actions/categories";

export function getInitialData() {
	console.log("initial");
	return Promise.all([
		getAllCategories(),
		getAllPosts()
	]).then(([ categories, posts
	]) => ({
		// returning variables
		categories,
		posts
	}));
}

// export function getSinglePost(id) {
// 	return getPost(id);
// }
