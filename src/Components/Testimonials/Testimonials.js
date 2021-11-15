import { Carousel } from "@trendyol-js/react-carousel";
import React from "react";
import { Link } from "react-router-dom";
import useEventListener from "../../Hooks/useEventListener";
import Spinner from "../Spinner/Spinner";
const Testimonials = () => {
	const [products, setProducts] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
	useEventListener("resize", () => {
		setWindowWidth(window.innerWidth);
	});
	React.useEffect(() => {
		fetch(`${process.env.REACT_APP_BACKEND}/menu`)
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.then(() => setLoading(false))
			.catch((error) => console.log(error));
	}, []);
	const renderProducts = () => {
		return products.map((product) => (
			<div className="mx-4" key={product._id}>
				<div className="item-card">
					<div className="img-food-container">
						<img src={product.imgURL} alt="random food" className="food-img" />
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
							<p className="text-black px-4 py-2" style={{ fontSize: "1em" }}>
								{product.description}
							</p>
						</div>
						<div className="px-4 d-flex justify-content-between align-items-center pricing ">
							<div className="price bg-light-green py-1 px-4 rounded">
								<span aria-roledescription="item price">${product.price}</span>
							</div>
							<Link className="btn" to={`/placeorder/${product._id}`}>
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
		));
	};
	return (
		<div className="container-custom">
			<div className="item-container">
				{loading ? (
					<Spinner></Spinner>
				) : (
					<Carousel
						show={Math.floor(
							windowWidth > 1440
								? windowWidth / 470
								: windowWidth > 768
								? windowWidth / 370
								: windowWidth > 320
								? windowWidth / 370
								: windowWidth / 320
						)}
						slide={1}
						swiping={true}
						responsive={true}
						dynamic={true}
						leftArrow={
							<ion-icon
								name="arrow-back"
								style={{
									transform: "translate(2px ,180px) scale(2)",
								}}
							></ion-icon>
						}
						rightArrow={
							<ion-icon
								name="arrow-forward"
								style={{
									transform: "translate(2px ,180px) scale(2)",
								}}
							></ion-icon>
						}
					>
						{renderProducts()}
					</Carousel>
				)}
			</div>
		</div>
	);
};

export default Testimonials;
