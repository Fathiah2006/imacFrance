import React from "react";

// Components
import Progress from "./Progress";

// styles
import "./Header.css";


const Header = () => {
	return (
		<header id="site-header">
			<div className="container">
				<Progress />

				<div className="header-content">
					<div className="sub-text">
						<p>
							Partner With Billion Soul • <a> Give Today </a>
						</p>
					</div>

					<div className="nav-content">
						<div className="site-logo">
							<img src="./h-logo.png" alt="header logo" />
						</div>

						<nav id="nav">
							<ul className="nav-items">
								<li className="nav-item"> 
									<a href="#">Home</a>
								</li>
								<li className="nav-item"> 
									<a href="#">About</a>
								</li>
								<li className="nav-item"> 
									<a href="#">Services</a>
								</li>
								<li className="nav-item"> 
									<a href="#">Portfolio</a>
								</li>
								<li className="nav-item"> 
									<a href="#">Blog</a>
								</li>
								<li className="nav-item"> 
									<a href="#">Contact</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
