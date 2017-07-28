import React from "react";
import {Routes} from "./Routes";
import {Navbar} from "./components/Navbar";

export class App extends React.Component {

	render() {
		return (
			<div>
				<Navbar />
				<Routes/>
			</div>
		)
	}
}
