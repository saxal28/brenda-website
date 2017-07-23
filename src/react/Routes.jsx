import React from "react";
import { Route } from 'react-router-dom';
import {HomeSection} from "./sections/HomeSection";

export class Routes extends React.Component {

	render() {
		return (
			<div>
				<Route exact path="/" component={HomeSection} />
				<Route path="/about" component={HomeSection} />
				{/*<Route path="/projects" component={HomeSection} />*/}
				{/*<Route path="/contact" component={HomeSection} />*/}
			</div>
		)
	}
}