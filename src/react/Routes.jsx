import React from "react";
import { Route } from 'react-router-dom';
import {HomeSection} from "./sections/HomeSection";
import {CharacterSection} from "./sections/CharacterSection";
import BookNowSection from "./sections/BookNowSection";
import ContactSection from "./sections/ContactSection";
import GalleryListSection from "./sections/GalleryListSection";
import {PricingSection} from "./sections/PricingSection";

export class Routes extends React.Component {

	render() {
		return (
			<div>
				<Route exact path="/" component={HomeSection} />
				<Route path="/gallery" component={GalleryListSection} />
				<Route path="/characters" component={CharacterSection} />
				<Route path="/contact" component={ContactSection} />
				<Route path="/book-now" component={BookNowSection} />
				<Route path="/pricing" component={PricingSection} />
			</div>
		)
	}
}