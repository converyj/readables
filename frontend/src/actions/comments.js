import { getPostComments } from "./../utils/PostsAPI";

export const RECIEVE_COMMENTS = "RECIEVE_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export function recieveComments(comments) {
	console.log(comments);
	return {
		type: RECIEVE_COMMENTS,
		payload: comments
	};
}

export function getComments(id) {
	return (dispatch) => {
		return getPostComments(id).then((comments) => dispatch(recieveComments(comments)));
	};
}

export function addComment(comment) {
	return {
		type: ADD_COMMENT,
		comment
	};
}

export function editComment(id) {
	return {
		type: EDIT_COMMENT,
		id
	};
}

export function deleteComment(id) {
	return {
		type: DELETE_COMMENT,
		id
	};
}
