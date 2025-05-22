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
							<img src="" alt="" />
						</div>

						<nav id="nav"></nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
