import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
					<div className="cardHeader">
						<h2>Recent Orders</h2>
						<Link to="orders/all" className="btn">
							View All
						</Link>
					</div>
					<table>
						<thead>
							<tr>
								<td>Name</td>
								<td>Price</td>
								<td>Payments</td>
								<td>Status</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td>
									<span className="status processing">Processing</span>
								</td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td>
									<span className="status delivered">Deliverd</span>
								</td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td>
									<span className="status delivered">Delivered</span>
								</td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td>
									<span className="status processing">Processing</span>
								</td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td>
									<span className="status delivered">Delivered</span>
								</td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td>
									<span className="status processing">Processing</span>
								</td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td>
									<span className="status delivered">Delivered</span>
								</td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td>
									<span className="status processing">Processing</span>
								</td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td>
									<span className="status delivered">Delivered</span>
								</td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td>
									<span className="status delivered">Delivered</span>
								</td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td>
									<span className="status processing">Processing</span>
								</td>
							</tr>
						</tbody>
					</table>
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

export default Dashboard;
