import React from "react";
import { Carousel as CarouseL } from "react-bootstrap";
import "./Home.css";
const Home = () => {
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
						<div className="container">
							<div className="banner-body row">
								<div className="col-lg-6">
									<h1>hello</h1>
								</div>
								<div className="col-lg-6">
									<h1>food</h1>
								</div>
							</div>
						</div>
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
		</div>
	);
};

export default Home;
