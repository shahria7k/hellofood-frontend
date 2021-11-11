import React from "react";
import "./Footer.css";
const Footer = () => {
	return (
		<footer className="mt-5 py-5 bg-black">
			<div className=" bg-black pb-4">
				<div className="row pt-3 bg-black">
					<div className="col-lg-6 bg-black">
						<h3 className="text-light text-center bg-black">
							All Rights Reserved &copy; {new Date().getFullYear()}
						</h3>
					</div>
					<div className="col-lg-6 d-flex justify-content-center bg-black">
						<h6 className="text-white bg-black text-center">
							Designed and Developed by{" "}
							<a href="https://shahriakhan.me" className="nav-link bg-black">
								Shahria Jaman Khan
							</a>
						</h6>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
