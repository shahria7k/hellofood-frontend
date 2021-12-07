import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
const AllOrders = () => {
	const [orders, setOrders] = React.useState([]);
	const [loading, setLoading] = useState(true);

	const handleDelete = async (id) => {
		const confirm = await window.confirm(
			"Are you sure you want to delete this item?"
		);
		if (confirm) {
			fetch(`${process.env.REACT_APP_BACKEND}/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => console.log(data))
				.then(() => {
					setOrders(orders.filter((product) => product._id !== id));
				})
				.catch((error) => console.log(error));
		}
	};
	useEffect(() => {
		fetch(`${process.env.REACT_APP_BACKEND}/orders`)
			.then((res) => res.json())
			.then((data) => setOrders(data))
			.then(() => setLoading(false))
			.catch((error) => console.log(error));
	}, []);
	return (
		<div className="dashboard">
			<div className="cardBox">
				<div className="card">
					<div>
						<div className="numbers">1,504</div>
						<div className="cardName">Daily Views</div>
					</div>
					<div className="iconBox">
						<ion-icon name="eye-outline"></ion-icon>
					</div>
				</div>
				<div className="card">
					<div>
						<div className="numbers">88</div>
						<div className="cardName">Seles</div>
					</div>
					<div className="iconBox">
						<ion-icon name="cart-outline"></ion-icon>
					</div>
				</div>
				<div className="card">
					<div>
						<div className="numbers">284</div>
						<div className="cardName">Comments</div>
					</div>
					<div className="iconBox">
						<ion-icon name="chatbubble-ellipses"></ion-icon>
					</div>
				</div>
				<div className="card">
					<div>
						<div className="numbers">$7,493</div>
						<div className="cardName">Earnings</div>
					</div>
					<div className="iconBox">
						<ion-icon name="cash-sharp"></ion-icon>
					</div>
				</div>
			</div>
			<div className="details">
				<div className="recentOrders">
					<div className="cardHeader ">
						<h2>All Orders</h2>
						<button className="btn">View All</button>
					</div>
					{loading ? (
						<Spinner />
					) : (
						<table>
							<thead>
								<tr>
									<td>Date</td>
									<td>Total</td>
									<td>Payments</td>
									<td>Status</td>
									<td>Action</td>
								</tr>
							</thead>
							<tbody>
								{orders.map((order) => {
									return (
										<tr key={order._id}>
											<td>{new Date(order.time).toLocaleDateString()}</td>
											<td>
												{order.cart.reduce((acc, curr) => acc + curr.price, 0)}
											</td>
											<td>{order.isPaid ? "Paid" : "Unpaid"}</td>
											<td>
												{order.isComplete ? (
													<span className="status delivered">Deliverd</span>
												) : (
													<span className="status processing">Processing</span>
												)}
											</td>
											<td>
												<Link
													className="action update btn m-1"
													style={{ width: "60px" }}
													to={`/order/${order._id}`}
												>
													update
												</Link>
												<button
													className="action delete ms-lg-2 m-1"
													style={{ width: "60px" }}
													onClick={() => {
														handleDelete(order._id);
													}}
												>
													delete
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					)}
				</div>
				<div className="recentCustomers">
					<div className="cardHeader">
						<h2>Recent Customers</h2>
					</div>
					<table>
						<tbody>
							<tr>
								<td width="60px">
									<div className="imgBox">
										<img
											src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
											alt=""
										/>
									</div>
								</td>
								<td>
									<h4>
										David <br />
										<span>Italy</span>
									</h4>
								</td>
							</tr>
							<tr>
								<td width="60px">
									<div className="imgBox">
										<img
											src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
											alt=""
										/>
									</div>
								</td>
								<td>
									<h4>
										David <br />
										<span>Italy</span>
									</h4>
								</td>
							</tr>
							<tr>
								<td width="60px">
									<div className="imgBox">
										<img
											src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
											alt=""
										/>
									</div>
								</td>
								<td>
									<h4>
										David <br />
										<span>Italy</span>
									</h4>
								</td>
							</tr>
							<tr>
								<td width="60px">
									<div className="imgBox">
										<img
											src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
											alt=""
										/>
									</div>
								</td>
								<td>
									<h4>
										David <br />
										<span>Italy</span>
									</h4>
								</td>
							</tr>
							<tr>
								<td width="60px">
									<div className="imgBox">
										<img
											src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
											alt=""
										/>
									</div>
								</td>
								<td>
									<h4>
										David <br />
										<span>Italy</span>
									</h4>
								</td>
							</tr>
							<tr>
								<td width="60px">
									<div className="imgBox">
										<img
											src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
											alt=""
										/>
									</div>
								</td>
								<td>
									<h4>
										David <br />
										<span>Italy</span>
									</h4>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AllOrders;
