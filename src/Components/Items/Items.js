import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "./item.style.css";
const Items = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleDelete = useCallback(async (id) => {
		const confirm = await window.confirm(
			"Are you sure you want to delete this item?"
		);
		if (confirm) {
			setLoading(true);
			fetch(`https://hello-food-app.herokuapp.com/menu/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => console.log(data))
				.then(() => setLoading(false))
				.catch((error) => console.log(error));
		}
	});
	useEffect(() => {
		fetch("https://hello-food-app.herokuapp.com/menu")
			.then((response) => response.json())
			.then((data) => setProducts(data))
			.then(() => setLoading(false))
			.catch((error) => console.log(error));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleDelete]);
	return (
		<div className="products container-fluid">
			<div className="cardBox">
				<div className="card">
					<div>
						<div className="numbers">{products?.length || "0"}</div>
						<div className="cardName">Total Products</div>
					</div>
					<div className="iconBox">
						<ion-icon name="cart-outline"></ion-icon>
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
			<h1 className="m-5">All Items</h1>
			{loading ? (
				<Spinner></Spinner>
			) : (
				<table>
					<thead>
						<tr>
							<td>Name</td>
							<td>Price</td>
							<td>Stock</td>
							<td>Status</td>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr key={product._id}>
								<td>{product.title}</td>
								<td>{product.price}</td>
								<td>{product.stock}</td>
								<td>
									<Link
										className="action view btn m-1"
										style={{ width: "60px" }}
										to={`/menu/${product._id}`}
									>
										view
									</Link>
									<button
										className="action delete ms-lg-2 m-1"
										style={{ width: "60px" }}
										onClick={() => {
											handleDelete(product._id);
										}}
									>
										delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default Items;
