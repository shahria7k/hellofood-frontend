import React from "react";
import "./Footer.css";
const Footer = () => {
	return (
		<footer className="mt-5 py-1 bg-black container-custom">
			<div className=" bg-black w-100">
				<div className="row pt-3 bg-black w-100" style={{ margin: "0" }}>
					<div className="col-lg-6 bg-black p-0">
						<h3 className="text-light text-center bg-black">
							All Rights Reserved &copy; {new Date().getFullYear()}
						</h3>
					</div>
					<div className="col-lg-6 d-flex justify-content-center bg-black p-0">
						<h6 className="text-white bg-black text-center">
							Designed and Developed by{" "}
							<a
								href="https://shahria7k.github.io/shahria7k/"
								className="nav-link bg-black"
								target="_blank"
								rel="noreferrer"
							>
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
