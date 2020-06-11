/**
 * persist the sortBy radio button state between the / and /:catagory views 
 */

import { SET_SORT_BY } from "./../actions/sort";

export default function sortBy(state = "date", action) {
	switch (action.type) {
		case SET_SORT_BY: {
			return action.sortBy;
		}
		default:
			return state;
	}
}
