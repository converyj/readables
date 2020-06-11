import { RECIEVE_CATEGORIES } from "../actions/categories";

export default function categories(state = [], action) {
	switch (action.type) {
		case RECIEVE_CATEGORIES:
			return [
				...state,
				...action.categories
			];

		default:
			return state;
	}
}
