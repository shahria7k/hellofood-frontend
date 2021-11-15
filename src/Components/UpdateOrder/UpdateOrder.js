/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";

const UpdateOrder = () => {
	const { id } = useParams();
	const status = useRef(null);
	const payment = useRef(null);
	const [order, setOrder] = useState(null);
	const [cart, setCart] = useState([]);
	const history = useHistory();
	const { register, handleSubmit, setValue, errors } = useForm();
	useEffect(() => {
		fetch(`https://hello-food-app.herokuapp.com/orders/${id}`)
			.then((res) => res.json())
			.then((data) => setOrder(data));
	}, []);
	useEffect(() => {
		if (order) {
			fetch(`${process.env.REACT_APP_BACKEND}/menu/${order?.cart[0]._id}`)
				.then((res) => res.json())
				.then((data) => setCart(data))
				.catch((err) => console.log(err));
		}
		setValue("email", order?.email);
		setValue("phone", order?.phone);
		setValue("address", order?.address);
		setValue("quantity", order?.cart[0].quantity);
		payment.current.value = order?.isPaid ? "true" : "false";
		status.current.value = order?.isComplete ? "true" : "false";
	}, [order]);

	const onSubmit = (data) => {
		const newOrder = { ...order };
		newOrder.email = data.email;
		newOrder.isPaid = data.isPaid;
		newOrder.isComplete = data.isComplete;
		newOrder.phone = data.phone;
		newOrder.address = data.address;
		newOrder.cart[0].quantity = data.quantity;
		console.log(newOrder);
		fetch(`https://hello-food-app.herokuapp.com/orders/${id}`, {
			method: "PATCH",
			body: JSON.stringify(newOrder),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.then(() => history.push("/allorders"))
			.catch(console.log);
	};
	return (
		<div className="addItem">
			<h2 className="text-center pt-5">Update Order</h2>
			<div className="addItem-form">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="row">
						<div className="col-lg-6">
							<div className="group">
								<div className="item-thumbnail p-lg-4 p-md-4">
									<div className="p-lg-4 p-md-4">
										<img
											src={cart.imgURL}
											alt=""
											className="img-fluid"
											style={{ borderRadius: "25px" }}
										/>
									</div>
								</div>
								<div className="item-info px-lg-4 px-md-4">
									<h5>Item Name: {cart.title}</h5>
									<p>Description: {cart.description}</p>
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
									<label htmlFor="" className="me-3">
										Delivery Status:
									</label>
									<br />
									<select
										id="status"
										ref={status}
										onChange={() => {
											setValue(
												"isComplete",
												status.current.value === "true" ? true : false
											);
										}}
									>
										<option value="">--Please choose an option--</option>
										<option value="true">Delivered</option>
										<option value="false">Processing</option>
									</select>
									{errors && <span>This field is required</span>}
								</div>
								<div className="input-group">
									<label htmlFor="payment" className="me-3">
										Payment Status:
									</label>
									<br />
									<select
										id="payment"
										ref={payment}
										onChange={() => {
											setValue(
												"isPaid",
												payment.current.value === "true" ? true : false
											);
										}}
									>
										<option value="">--Please choose an option--</option>
										<option value="true">Paid</option>
										<option value="false">Unpaid</option>
									</select>
									{errors && <span>This field is required</span>}
								</div>
								<div className="input-group">
									<input
										className="btn btn-sumbit"
										type="submit"
										value="Update Order"
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

export default UpdateOrder;
