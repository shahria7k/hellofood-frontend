import React from "react";
import { Carousel as CarouseL } from "react-bootstrap";
import { Link } from "react-router-dom";
import Spinner from ".././Spinner/Spinner";
import Footer from "../Footer/Footer";
import "./Home.css";
const Home = () => {
	const [products, setProducts] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	React.useEffect(() => {
		fetch("https://hello-food-app.herokuapp.com/menu")
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.then(() => setLoading(false))
			.catch((error) => console.log(error));
	}, []);
	console.log(products);
	return (
		<div className="container-custom mt-3">
			<div className="banner-container">
				<CarouseL fade>
					<CarouseL.Item className="banner">
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
							alt="First slide"
						/>
						<h1>something</h1>
						<CarouseL.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</CarouseL.Caption>
					</CarouseL.Item>

					<CarouseL.Item className="banner">
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
							alt="First slide"
						/>
						<h1>something</h1>
						<CarouseL.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</CarouseL.Caption>
					</CarouseL.Item>

					<CarouseL.Item className="banner">
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
							alt="First slide"
						/>
						<h1>something</h1>
						<CarouseL.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</CarouseL.Caption>
					</CarouseL.Item>
				</CarouseL>
			</div>
			<div className="container-custom mt-5">
				<div className="item-container">
					{loading ? (
						<Spinner></Spinner>
					) : (
						<div className="row">
							<div className=" col-xl-3 col-lg-4 col-md-6 p-4">
								<div className="item-card-first  bg-light-green p-4">
									<div className="bg-white  item-card-text pt-5 pb-4">
										<h4 className="text-black  px-5">
											What are you Craving for?
										</h4>
										<p
											className="text-black px-5 py-3"
											style={{ fontSize: "1em" }}
										>
											We have a wide range of foods to choose from.{" "}
											<ion-icon
												name="arrow-forward"
												style={{
													fontSize: "2em",
													transform: "translateY(10px)",
												}}
												className="d-inline-block"
											></ion-icon>
										</p>
									</div>
								</div>
							</div>
							{products.map((product) => {
								return (
									<div
										className=" col-xl-3 col-lg-4 col-md-6 p-4 food-item"
										key={product._id}
									>
										<div className="item-card">
											<div className="img-food-container">
												<img
													src={product.imgURL}
													alt="random food"
													className="food-img"
												/>
											</div>
											<div className="card-info d-flex flex-column">
												<div className="bg-white  item-card-text">
													<div className="card-title px-4 pt-4 d-flex align-items-center justify-content-between">
														<h4 className="text-black  ">{product.title}</h4>
														<span className="rating">
															<ion-icon name="star"></ion-icon>
															<ion-icon name="star"></ion-icon>
															<ion-icon name="star"></ion-icon>
														</span>
													</div>
													<p
														className="text-black px-4 py-2"
														style={{ fontSize: "1em" }}
													>
														{product.description}
													</p>
												</div>
												<div className="px-4 d-flex justify-content-between align-items-center pricing ">
													<div className="price bg-light-green py-1 px-4 rounded">
														<span aria-roledescription="item price">
															${product.price}
														</span>
													</div>
													<Link
														className="btn"
														to={`/placeorder/${product._id}`}
													>
														Order Now{" "}
														<ion-icon
															name="arrow-forward"
															style={{
																transform: "translateY(2px) scale(1.3)",
															}}
														></ion-icon>
													</Link>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;
