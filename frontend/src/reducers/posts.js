import { RECIEVE_POSTS, UP_VOTE, DOWN_VOTE, GET_POST, DELETE_POST } from "./../actions/posts";

export default function posts(state = {}, action) {
	switch (action.type) {
		case RECIEVE_POSTS:
			return {
				...state,
				...action.posts
			};

		case GET_POST:
			return {
				activePost: { ...action.payload }
			};

		case DELETE_POST:
			return Object.values(state).filter((p) => p.id !== action.id);

		case UP_VOTE:
			console.log(action);

			return Object.values(state).map(
				(post) =>
					post.id !== action.id ? post : { ...post, voteScore: post.voteScore + 1 }
			);

		case DOWN_VOTE:
			console.log(action);

			return Object.values(state).map(
				(post) =>
					post.id !== action.id ? post : { ...post, voteScore: post.voteScore - 1 }
			);

		default:
			return state;
	}
}
