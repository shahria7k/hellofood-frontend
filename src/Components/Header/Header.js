/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useEventListener from "../../Hooks/useEventListener";
import "./Header.css";
const Header = () => {
	const { user, signOut } = useAuth();
	const [ativeStyle, setActiveStyle] = useState(true);
	let current = useLocation().pathname;
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	useEventListener("resize", () => {
		setActiveStyle(ativeStyle);
		setWindowSize({ width: window.innerWidth, height: window.innerHeight });
	});
	const [hovered, setHovered] = useState("/" + current.split("/")[1]);
	// const refs = useRef([]);
	useEventListener("mouseover", (e) => {
		if (e.target.classList.contains("navLink")) {
			setHovered(e.target.attributes.href.value);
		}
	});
	useEventListener("mouseout", (e) => {
		if (e.target.classList.contains("navLink")) {
			setHovered("/" + current.split("/")[1]);
		}
	});
	return (
		<>
			<style>
				{ativeStyle
					? `
	.navigation-custom{
		width:  ${windowSize.width <= 991 ? "0px" : "80px"};
		transition: all 0.5s;
		transition: width 0.5s;
	}
		.topbar {
	width: ${windowSize.width <= 991 ? "100%" : "calc(100% - 80px)"};
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	position: relative;
	top: 0;
	z-index: 9990;
	background-color: var(--white);
	position: fixed;
	transition: width 0.5s;
}
	.main {
	position: absolute;
	width: ${windowSize.width <= 991 ? "100%" : "calc(100% - 80px)"};
	left:  ${windowSize.width <= 991 ? "0" : "80px"};
	min-height: 100vh;
	transition: 0.5s;
	background: var(--white)
}

	`
					: `
	.navigation-custom{
		width: 300px;
		transition: all 0.5s;
		transition: width 0.5s;
	}

		.topbar {
	width: calc(100% - 300px);
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	position: relative;
	top: 0;
	z-index: 9990;
	background-color: var(--white);
	position: fixed;
	transition: width 0.5s;
}
	.main {
	position: absolute;
	width: calc(100% - 300px);
	left: 300px;
	min-height: 100vh;
	transition: 0.5s;
	background: var(--white)
}
	`}
			</style>
			<div className="container-custom">
				<div
					className="navigation-custom"
					onClick={() => {
						setActiveStyle(true);
					}}
					onBlur={() => setActiveStyle(true)}
				>
					<ul>
						<li>
							<Link to="/home">
								<span className="icon">
									<ion-icon name="fast-food-outline"></ion-icon>
								</span>
								<span className="title">Hello Food</span>
							</Link>
						</li>
						<li className={hovered == "/home" ? "hovered" : ""}>
							<Link to="/home" className="navLink">
								<span className="icon">
									<ion-icon name="home-outline"></ion-icon>
								</span>
								<span className="title">Home</span>
							</Link>
						</li>
						{/* <li className={hovered == "/dashboard" ? "hovered" : ""}>
							<Link to="/dashboard" className="navLink">
								<span className="icon">
									<ion-icon name="today-outline"></ion-icon>
								</span>
								<span className="title">Dashboard</span>
							</Link>
						</li> */}
						<li className={hovered == "/customers" ? "hovered" : ""}>
							<Link to="/customers" className="navLink">
								<span className="icon">
									<ion-icon name="people-outline"></ion-icon>
								</span>
								<span className="title">Customers</span>
							</Link>
						</li>
						<li className={hovered == "/items" ? "hovered" : ""}>
							<Link to="/items" className="navLink">
								<span className="icon">
									<ion-icon name="layers-outline"></ion-icon>
								</span>
								<span className="title">Items</span>
							</Link>
						</li>
						<li className={hovered == "/additem" ? "hovered" : ""}>
							<Link to="/additem" className="navLink">
								<span className="icon">
									<ion-icon name="add-circle-outline"></ion-icon>
								</span>
								<span className="title">Add Items</span>
							</Link>
						</li>
						<li className={hovered == "/myorders" ? "hovered" : ""}>
							<Link to="/myorders" className="navLink">
								<span className="icon">
									<ion-icon name="bag-add-outline"></ion-icon>
								</span>
								<span className="title">My Orders</span>
							</Link>
						</li>
						<li className={hovered == "/allorders" ? "hovered" : ""}>
							<Link to="/allorders" className="navLink">
								<span className="icon">
									<ion-icon name="today-outline"></ion-icon>
								</span>
								<span className="title">All Orders</span>
							</Link>
						</li>
						<li>
							{user ? (
								<Link to="/" className="navLink" onClick={signOut}>
									<span className="icon">
										<ion-icon name="log-out-outline"></ion-icon>
									</span>
									<span className="title">Sign Out</span>
								</Link>
							) : (
								<Link to="/auth" className="navLink" onClick={signOut}>
									<span className="icon">
										<ion-icon name="log-in-outline"></ion-icon>
									</span>
									<span className="title">Sign in</span>
								</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className="main">
				<div className="topbar py-2">
					<div
						className="toggle"
						onClick={() => {
							setActiveStyle(!ativeStyle);
						}}
					>
						<ion-icon name="menu-outline"></ion-icon>
					</div>
					<div className="search">
						<label>
							<input type="text" placeholder="Search Here" />
							<ion-icon
								name="search-outline"
								style={{
									position: "absolute",
									top: "11px",
									left: "10px",
									fontSize: "1.2em",
								}}
							></ion-icon>
						</label>
					</div>
					<div className="user">
						{user?.photoURL ? (
							<img src={user?.photoURL} alt="" />
						) : (
							<Link to="/account">
								<ion-icon
									name="person-circle-outline"
									style={{ fontSize: "2em", color: "black" }}
								></ion-icon>
							</Link>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
