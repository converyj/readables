import { newPostVote, getPosts, getPost, removePost } from "../utils/PostsAPI";
// import { getSinglePost } from "../utils/api";

export const RECIEVE_POSTS = "RECIEVE_POSTS";
export const GET_POST = "GET_POST";
export const GET_CATEGORY_POSTS = "GET_CATEGORY_POSTS";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const UP_VOTE = "UP_VOTE";
export const DOWN_VOTE = "DOWN_VOTE";
export const ADD_POST = "ADD_POST";

export function recievePosts(posts) {
	return {
		type: RECIEVE_POSTS,
		posts
	};
}

export function getCategoryPosts(category) {
	console.log(category);
	return {
		type: GET_CATEGORY_POSTS,
		category
	};
}

export function getSinglePost(data) {
	return {
		type: GET_POST,
		payload: data
	};
}

export function addPost(post) {
	return {
		type: ADD_POST,
		post
	};
}

export function editPost(id) {
	return {
		type: EDIT_POST,
		id
	};
}

export function upVotePost(id) {
	return {
		type: UP_VOTE,
		id
	};
}

export function downVotePost(id) {
	return {
		type: DOWN_VOTE,
		id
	};
}

export function deletePost(id) {
	return {
		type: DELETE_POST,
		id
	};
}

export function handleCategoryPosts(category) {
	return (dispatch) => {
		return getPosts(category).then((category) => dispatch(getCategoryPosts(category)));
	};
}
export function handleVote(id, vote) {
	return (dispatch) => {
		{
			vote === "upVote" ? dispatch(upVotePost(id)) : dispatch(downVotePost(id));
		}

		return newPostVote(id, vote).catch(() => {
			vote === "upVote" ? dispatch(downVotePost(id)) : dispatch(upVotePost(id));
		});
	};
}

export function handlePost(id) {
	return (dispatch) => {
		// add loading reducer
		return getPost(id).then((post) => dispatch(getSinglePost(post)));
	};
}

export function handleDelete(post) {
	return (dispatch) => {
		dispatch(deletePost(post.id));

		return removePost(post.id).catch(() => {
			dispatch(addPost(post));
		});
	};
}

export function handleEdit(id) {}
