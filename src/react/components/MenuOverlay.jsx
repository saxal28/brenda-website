import React from 'react';
import {NavLink} from "react-router-dom";

export class MenuOverlay extends React.Component {

	render() {

		const {visible, toggleMenuOverlay} = this.props;

		return (
			<div>
				{visible && <div className="overlay menu-overlay">
					<NavLink to="/" className="overlay-link" exact  onClick={toggleMenuOverlay}>home</NavLink>
					<NavLink to="/gallery" className="overlay-link" strict onClick={toggleMenuOverlay}>gallery</NavLink>
					<NavLink to="/characters" className="overlay-link" strict onClick={toggleMenuOverlay}>characters</NavLink>
					<NavLink to="/contact" className="overlay-link" strict onClick={toggleMenuOverlay}>contact</NavLink>
					<NavLink to="/book-now" className="overlay-link button" strict onClick={toggleMenuOverlay}>book now</NavLink>
				</div>}
			</div>
		)
	}
}