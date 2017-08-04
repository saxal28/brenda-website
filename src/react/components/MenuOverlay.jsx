import React from 'react';
import {NavLink} from "react-router-dom";

export class MenuOverlay extends React.Component {

	render() {

		const {visible, toggleMenuOverlay} = this.props;

		return (
			<div>
				{visible && <div className="overlay menu-overlay">
					<h1>Home</h1>
					<h1>Characters</h1>
					<h1>Gallery</h1>
					<h1>Contact</h1>
					<h1>Book Now</h1>
				</div>}
			</div>
		)
	}
}