export const RECIEVE_CATEGORIES = "RECIEVE_CATEGORIES";

export function recieveCategories(categories) {
	return {
		type: RECIEVE_CATEGORIES,
		categories
	};
}
