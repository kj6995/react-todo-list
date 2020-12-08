import React from "react";
import {NavLink} from "react-router-dom";
import LogicCode from "./LogicCode";
const NavBar = () => {
	return (
		<>
			<div className="navbar">
				<ul className="nav_ul">
					<NavLink
						className="navlink"
						exact
						activeClassName="active_class"
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className="navlink"
						exact
						activeClassName="active_class"
						to="/aboutus"
					>
						AboutUs
					</NavLink>
				</ul>
			</div>
			<LogicCode />
		</>
	);
};

export default NavBar;
