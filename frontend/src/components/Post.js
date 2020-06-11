import React, { Component, Fragment } from "react";
import { formatDate } from "./../utils/helpers";
import { FiThumbsUp, FiThumbsDown, FiAlignRight } from "react-icons/fi";
import { MdDelete, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { handleVote, handleEdit, handleDelete } from "./../actions/posts";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";

class Post extends Component {
	/**
	 * posts: all posts or specific posts
	 */
	static propTypes = {
		posts: PropTypes.object.isRequired
	};

	handleIncrementVote = (id) => {
		this.props.handleVote(id, "upVote");
	};

	handleDecrementVote = (id) => {
		this.props.handleVote(id, "downVote");
	};

	handleDelete = (post) => {
		this.props.handleDelete(post);
	};

	handleEdit = (id) => {
		this.props.handleEdit(id);
	};

	render() {
		const { post, styles } = this.props;

		return (
			<Fragment>
				<div className="card mb-2">
					<div className="card-header d-flex">
						{!this.props.match.params.id ? (
							<Link className="card-title" to={`/posts/${post.id}`}>
								<h5>{post.title}</h5>
							</Link>
						) : (
							<h5>{post.title}</h5>
						)}
						<div className="ml-auto">
							<MdDelete
								className="icon"
								color={styles ? styles.bgColor : "red"}
								onClick={() => this.handleDelete(post)}
							/>
							<MdEdit
								className="icon"
								color={styles ? styles.bgColor : "green"}
								onClick={() => this.handleEdit(post.id)}
							/>
						</div>
					</div>
					<div className="card-body">
						<h6 className="card-subtitle mb-2 text-muted">
							{`Posted By ${post.author}`}
						</h6>
						<p className="card-text">{formatDate(post.timestamp)}</p>
						<span className="badge badge-pill badge-primary">{post.category}</span>

						<p className="card-text">{post.body}</p>
					</div>
					<div className="card-footer d-flex justify-content-between">
						<div>
							<p>{`${post.voteScore} votes`}</p>
							<p>{post.commentCount && `${post.commentCount} Comments`}</p>
						</div>
						<div className="float-right">
							<FiThumbsUp
								className="icon"
								fill="green"
								stroke="green"
								onClick={() => this.handleIncrementVote(post.id)}
							/>
							<FiThumbsDown
								className="icon"
								fill="red"
								stroke="red"
								onClick={() => this.handleDecrementVote(post.id)}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withRouter(connect(null, { handleVote, handleEdit, handleDelete })(Post));
