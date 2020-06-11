import { GET_POST } from "../actions/posts";

export default function activePosts(state = {}, action) {
	switch (action.type) {
		case "GET_POST":
			return {
				...action.payload
			};

		default:
			return state;
	}
}
