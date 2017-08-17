import React from "react";
import { Route } from 'react-router-dom';
import {HomeSection} from "./sections/HomeSection";
import GallerySection from "./sections/GallerySection";
import {CharacterSection} from "./sections/CharacterSection";
import BookNowSection from "./sections/BookNowSection";
import ContactSection from "./sections/ContactSection";

export class Routes extends React.Component {

	render() {
		return (
			<div>
				<Route exact path="/" component={HomeSection} />
				<Route path="/gallery" component={GallerySection} />
				<Route path="/characters" component={CharacterSection} />
				<Route path="/contact" component={ContactSection} />
				<Route path="/book-now" component={BookNowSection} />
			</div>
		)
	}
}