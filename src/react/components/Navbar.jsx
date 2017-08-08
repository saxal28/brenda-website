import React from 'react';
import {NavLink} from "react-router-dom";

export class Navbar extends React.Component {
	render() {

		const {toggleMenuOverlay} = this.props;

		return (
			<div className="navbar">

				<i className="fa fa-bars nav-menu-button"  onClick={toggleMenuOverlay}/>
				<NavLink to="/" className="nav-link" exact>home</NavLink>
				<NavLink to="/gallery" className="nav-link" strict>gallery</NavLink>
				<NavLink to="/characters" className="nav-link" strict>characters</NavLink>
				<NavLink to="/contact" className="nav-link" strict>contact</NavLink>
				<NavLink to="/book-now" className="nav-link button" strict>book now</NavLink>
			</div>
		)
	}
}