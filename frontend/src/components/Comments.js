import React, { Component } from "react";

import Post from "./Post";
import CommentForm from "./CommentForm";

import { comment } from "../utils/helpers";

export default class Comments extends Component {
	render() {
		const { comments } = this.props;
		return (
			<div>
				{comments.length !== 0 ? (
					Object.values(comments).map((comment) => (
						<Post key={comment.id} styles={comment} post={comment} />
					))
				) : (
					<CommentForm />
				)}
			</div>
		);
	}
}
