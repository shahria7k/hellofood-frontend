import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Spinner from "../Spinner/Spinner";
import "./Authentication.css";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
const Authentication = () => {
	const [action, setAction] = useState("signin");
	const toggleAction = () => {
		if (action === "signin") {
			setAction("signup");
		} else {
			setAction("signin");
		}
	};

	const history = useHistory();
	const location = useLocation();
	const redirect_URL = location?.state?.from?.pathname || "/home";
	const { user, isLoading } = useAuth();
	useEffect(() => {
		console.log(user);
		if (user) {
			history.push(redirect_URL);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);
	return (
		<>
			{isLoading ? (
				<Spinner></Spinner>
			) : (
				<div className="authContainer">
					<style>{`body{overflow:hidden}`}</style>
					<ion-icon
						name="close-outline"
						id="close"
						onClick={() => {
							history.push("/home");
						}}
					></ion-icon>
					<div className="authCard">
						{action === "signin" ? <SignIn></SignIn> : <SignUp></SignUp>}
						{action === "signin" ? (
							<p className="text-center">
								Don't have an account? <br />
								<span style={{ cursor: "pointer" }} onClick={toggleAction}>
									<u>Create an Account</u>
								</span>
							</p>
						) : (
							<p className="text-center">
								Already have an account? <br />
								<span style={{ cursor: "pointer" }} onClick={toggleAction}>
									<u>Sign into your Account</u>
								</span>
							</p>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default Authentication;
