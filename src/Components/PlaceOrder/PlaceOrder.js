/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
const PlaceOrder = () => {
	const { id } = useParams();
	const [cart, setCart] = useState([]);
	const { user } = useAuth();
	const history = useHistory();
	const { register, handleSubmit, errors } = useForm();
	useEffect(() => {
		fetch(`${process.env.REACT_APP_BACKEND}/menu/${id}`)
			.then((res) => res.json())
			.then((data) => {
				const newCart = [];
				newCart.push(data);
				setCart(newCart);
			})
			.catch((err) => console.log(err));
	}, []);
	const onSubmit = (data) => {
		const newCart = [...cart];
		newCart[0].quantity = data.quantity;
		const newOrder = {};
		newOrder.email = data.email;
		newOrder.phone = data.phone;
		newOrder.address = data.address;
		newOrder.cart = newCart;
		fetch(`${process.env.REACT_APP_BACKEND}/orders`, {
			method: "POST",
			body: JSON.stringify(newOrder),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.then(() => history.push("/myorders"))
			.catch(console.log);
	};
	return (
		<div className="addItem">
			<h2 className="text-center pt-5">Place Order</h2>
			<div className="addItem-form">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="row">
						<div className="col-lg-6">
							<div className="group">
								<div className="item-thumbnail p-lg-4 p-md-4">
									<div className="p-lg-4 p-md-4">
										<img
											src={cart[0]?.imgURL}
											alt=""
											className="img-fluid"
											style={{ borderRadius: "25px" }}
										/>
									</div>
								</div>
								<div className="item-info px-lg-4 px-md-4">
									<h5>Item Name: {cart[0]?.title}</h5>
									<p>Description: {cart[0]?.description}</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="group ">
								<div className="input-group">
									<label htmlFor="email">Email</label>
									<br />
									<input
										type="email"
										id="email"
										placeholder="Customers Email"
										defaultValue={user.email}
										{...register("email", { required: true })}
									/>
									{errors && <span>This field is required</span>}
								</div>
								<div className="input-group">
									<label htmlFor="phone">Phone</label>
									<br />
									<input
										type="number"
										id="price"
										placeholder="Customers Phone number"
										{...register("phone", { required: false })}
									/>
									{errors && <span>This field is required</span>}
								</div>
								<div className="input-group">
									<label htmlFor="address">Address</label>
									<br />
									<textarea
										type="text"
										id="address"
										placeholder="Customers address"
										{...register("address", { required: true })}
									/>
									{errors && <span>This field is required</span>}
								</div>
								<div className="input-group">
									<label htmlFor="quantity">quantity</label>
									<br />
									<input
										type="number"
										id="quantity"
										placeholder="Quantity of the product"
										{...register("quantity", { required: true })}
									/>
									{errors && <span>This field is required</span>}
								</div>
								<div className="input-group">
									<input
										className="btn btn-sumbit"
										type="submit"
										value="Place Order"
										id="submit"
									/>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PlaceOrder;
