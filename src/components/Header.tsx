import React from "react";
import "../styles/Header.css";

const Header = () => {
	return (
		<nav className="nav-container">
			<div className="nav">
				<a className="home-link" href="/">
					Welcome!
				</a>
				<div className="nav-right">
					<a className="right-link" href="/">
						Projects
					</a>
					<a className="right-link" href="/">
						Blog
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Header;
