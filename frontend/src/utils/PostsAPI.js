// Own API calls to server

const api = process.env.REACT_APP_BACKEND || "http://localhost:3001";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
	Accept: "application/json",
	Authorization: token
};

// Get all of the categories available for the app. List is found in categories.js.
export const getAllCategories = () =>
	fetch(`${api}/categories`, { headers })
		.then((res) => res.json())
		.then((data) => data.categories);

// Get all of the posts for a particular category
export const getPosts = (category) =>
	fetch(`${api}/${category}/posts`, { headers }).then((res) => res.json()).then((data) => data);

// Get all of the posts. Useful for the main page when no category is selected.
export const getAllPosts = () =>
	fetch(`${api}/posts`, { headers }).then((res) => res.json()).then((data) => data);

// Add a new post
export const newPost = (post) =>
	fetch(`${api}/posts/${post}`, {
		method: "POST",
		headers: {
			...headers,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ post })
	}).then((res) => res.json());

// Get the details of a single post
export const getPost = (postId) =>
	fetch(`${api}/posts/${postId}`, { headers }).then((res) => res.json()).then((data) => data);

// Used for voting on a post
export const newPostVote = (postId, vote) =>
	fetch(`${api}/posts/${postId}`, {
		method: "POST",
		headers: {
			...headers,
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: JSON.stringify({ option: `${vote}` })
	}).then((res) => res.json());

// Edit the details of an existing post
export const editPost = (postId) =>
	fetch(`${api}/posts/${postId}`, { headers })
		.then((res) => res.json())
		.then((data) => data.post);

/* Sets the deleted flag for a post to 'true'.;
 Sets the parentDeleted flag for all child comments to 'true'. */
export const removePost = (postId) =>
	fetch(`${api}/posts/${postId}`, { method: "DELETE", headers })
		.then((res) => res.json())
		.then((data) => data.post);

// Get all the comments for a single post
export const getPostComments = (postId) =>
	fetch(`${api}/posts/${postId}/comments`, { headers })
		.then((res) => res.json())
		.then((data) => data);

// Add a comment to a post
export const newComment = (comment) =>
	fetch(`${api}/comments/${comment}`, {
		method: "POST",
		headers: {
			...headers,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ comment })
	}).then((res) => res.json());

// Get the details for a single comment
export const getComment = (commentId) =>
	fetch(`${api}/comments/${commentId}`, { headers })
		.then((res) => res.json())
		.then((data) => data.comment);

// Used for voting on a comment
export const newCommentVote = (commentId) =>
	fetch(`${api}/comments/${commentId}`, {
		method: "POST",
		headers: {
			...headers,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ commentId })
	}).then((res) => res.json());

// Edit the details of an existing comment
export const editComment = (commentId) =>
	fetch(`${api}/comments/${commentId}`, { headers })
		.then((res) => res.json())
		.then((data) => data.comment);

// Sets the deleted flag for a post to 'true'.
export const removeComment = (commentId) =>
	fetch(`${api}/comments/${commentId}`, { method: "DELETE", headers })
		.then((res) => res.json())
		.then((data) => data.comment);
