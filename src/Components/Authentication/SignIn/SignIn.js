import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const SignIn = () => {
	const location = useLocation();
	const history = useHistory();
	const redirect_URL = location?.state?.from?.pathname || "/home";
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { signInUsingGoogle, signInUsingPassword } = useAuth();
	const onSubmit = (data) => {
		signInUsingPassword(data.email, data.password)
			.then(() => {
				history.push(redirect_URL);
			})
			.catch(console.dir);
	};

	return (
		<div className="signin">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>Sign In</h2>
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<br />
					<input
						type="email"
						id="email"
						placeholder="Type your Email"
						{...register("email", { required: true })}
					/>
					{errors.exampleRequired && <span>This field is required</span>}
				</div>
				<div className="input-group">
					<label htmlFor="password">Password</label>
					<br />
					<input
						type="password"
						id="passoword"
						placeholder="Type your Password"
						{...register("password", { required: true })}
					/>
					{errors.exampleRequired && <span>This field is required</span>}
				</div>
				<div className="input-group">
					<input
						className="btn btn-sumbit"
						type="submit"
						value="Sign In"
						id="submit"
					/>
				</div>
			</form>
			<div className="input-group text-center">
				<button
					className="btn btn-google"
					onClick={(e) => {
						signInUsingGoogle()
							.then(() => {
								history.push(redirect_URL);
							})
							.catch(console.dir);
					}}
				>
					Or Continue with <ion-icon name="logo-google"></ion-icon>
				</button>
			</div>
		</div>
	);
};

export default SignIn;
