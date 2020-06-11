import { getInitialData } from "./../utils/api";

import { recievePosts } from "./posts";
import { recieveCategories } from "./categories";

export default function handleInitialData() {
	return (dispatch) => {
		return getInitialData().then(({ categories, posts }) => {
			dispatch(recieveCategories(categories));
			dispatch(recievePosts(posts));
		});
	};
}
