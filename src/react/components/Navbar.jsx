import React from 'react';

export class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<div className="nav-link active">home</div>
				<div className="nav-link">gallery</div>
				<div className="nav-link">characters</div>
				<div className="nav-link">contact</div>
				<div className="nav-link button">book now</div>
			</div>
		)
	}
}