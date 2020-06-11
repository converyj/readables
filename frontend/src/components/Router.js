import React from "react";
import Dashboard from "./Dashboard";
import { Route } from "react-router-dom";
import PostDetails from "./PostDetails";
import EditPost from "./EditPost";
import NewPost from "./NewPost";
import CategoryPosts from "./CategoryPosts";

export default function Router() {
	return (
		<div>
			<Route path={"/"} exact component={Dashboard} />
			<Route path={"/:category"} component={CategoryPosts} />
			<Route path={"/posts/:id"} component={PostDetails} />
			<Route path={"/:category/:id/edit"} component={EditPost} />
			<Route path={"/new"} component={NewPost} />
		</div>
	);
}
