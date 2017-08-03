import React from 'react';
import {NavLink} from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<NavLink to="/" className="nav-NavLink active">home</NavLink>
				<NavLink to="/" className="nav-NavLink">gallery</NavLink>
				<NavLink to="/" className="nav-NavLink">characters</NavLink>
				<NavLink to="/contact" className="nav-NavLink">contact</NavLink>
				<NavLink to="/" className="nav-NavLink button">book now</NavLink>
			</div>
		)
	}
}