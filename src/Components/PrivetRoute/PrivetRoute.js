import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Spinner from "../Spinner/Spinner";
const PrivetRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useAuth();
	if (isLoading) {
		return (
			<div className="container text-center" style={{ marginTop: "200px" }}>
				<Spinner></Spinner>
			</div>
		);
	}

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user ? (
					children
				) : (
					<Redirect
						to={{ pathname: "/auth", state: { from: location } }}
					></Redirect>
				)
			}
		></Route>
	);
};

export default PrivetRoute;
