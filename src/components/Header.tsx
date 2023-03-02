import React from "react";
import Styles from "../styles/Header.module.css";

const Header = () => {
	return (
		<nav className={Styles.navContainer}>
			<div className={Styles.nav}>
				<a className={Styles.homeLink} href="/">
					Welcome!
				</a>
				<div className={Styles.navRight}>
					<a className={Styles.righLink} href="/">
						Projects
					</a>
					<a className={Styles.righLink} href="/">
						Blog
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Header;
