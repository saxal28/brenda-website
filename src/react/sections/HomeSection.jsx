import React from "react";
import {GridContainer} from "../components/GridContainer";
import {Column} from "../components/Column";
import {Hero} from "../components/Hero";
import {Card} from "../components/Card";
import {Footer} from "../components/Footer";
import {ContentContainer} from "../components/ContentContainer";



export class HomeSection extends React.Component {

	navigateTo(url) {
		this.props.history.push(`/${url}`)
	}

	render() {

		// const navigateTo = this.navigateTo.bind(this)

		return (
			<div>

				<Hero image="http://i.imgur.com/jhkoXzR.jpg">

					<h1>Book A Princess</h1>
					<h1>For Your Next Party</h1>

					<div className="button-row">
						<button>Gallery</button>
						<button>Book Now</button>
					</div>

				</Hero>

				<ContentContainer>

					<GridContainer>

						<Column>
							<Card
								title="Who We Are"
								subtitle="Happily Ever After STL specializes in providing princesses and disney characters to parties and events"
							/>
						</Column>

						<Column>
							<Card
								title="Gallery"
								image="http://i.imgur.com/jhkoXzR.jpg"/>
						</Column>

					</GridContainer>

					<GridContainer>

						<Column>
							<Card
								title="Characters"
								image="http://i.imgur.com/CX5QmN2.jpg"/>
						</Column>

						<Column>
							<Card title="Cast"
								  image="http://i.imgur.com/CX5QmN2.jpg"/>
						</Column>

					</GridContainer>
				</ContentContainer>

				<Hero
					image="http://i.imgur.com/jhkoXzR.jpg"
					height="60vh"
				>

					<GridContainer>

						<h1>Hire A Princess without breaking the bank!</h1>
						<div className="button-row">
							<button>Party Packages</button>
							<button>Questions?</button>
						</div>
					</GridContainer>

				</Hero>

				<Footer />

			</div>
		)
	}
}