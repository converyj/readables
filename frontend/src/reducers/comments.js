import { RECIEVE_COMMENTS } from "../actions/comments";

export default function comments(state = {}, action) {
	switch (action.type) {
		case RECIEVE_COMMENTS:
			return {
				...action.payload
			};

		default:
			return state;
	}
}
