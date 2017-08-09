import React from "react";
import {Routes} from "./Routes";
import {Navbar} from "./components/Navbar";
import {MenuOverlay} from "./components/MenuOverlay";
import {initializeFirebase} from "../app-config";

export class App extends React.Component {

	state = { showMenuOverlay: false }
	toggleMenuOverlay() { this.setState({ showMenuOverlay: !this.state.showMenuOverlay })}

	componentWillMount() {
		initializeFirebase()
	}

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
