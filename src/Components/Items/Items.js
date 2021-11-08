import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./item.style.css";

const Items = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("http://localhost:8080/menu")
			.then((response) => response.json())
			.then((data) => setProducts(data))
			.then(() => console.log(products))
			.catch((error) => console.log(error));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);
	const handleDelete = async (id) => {
		const confirm = await window.confirm(
			"Are you sure you want to delete this item?"
		);
		if (confirm) {
			fetch(`http://localhost:8080/menu/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => console.log(data))
				.then(() => setLoading(!loading))
				.catch((error) => console.log(error));
		}
	};
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
		</div>
	);
};

export default Items;
