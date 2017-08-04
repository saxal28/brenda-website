import React from "react";
import {Routes} from "./Routes";
import {Navbar} from "./components/Navbar";
import {MenuOverlay} from "./components/MenuOverlay";

export class App extends React.Component {

	state = { showMenuOverlay: false }

	toggleMenuOverlay() { this.setState({ showMenuOverlay: !this.state.showMenuOverlay })}

	render() {

		const {showMenuOverlay} = this.state;

		return (
			<div>
				<Navbar toggleMenuOverlay={this.toggleMenuOverlay.bind(this)} />
				<MenuOverlay visible={showMenuOverlay} toggleMenuOverlay={this.toggleMenuOverlay.bind(this)}/>
				<Routes/>
			</div>
		)
	}
}
