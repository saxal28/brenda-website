import React from "react";
import {Header} from "../components/Header";
import {GridContainer} from "../components/GridContainer";
import {Card} from "../components/Card";
import {Column} from "../components/Column";
import {Footer} from "../components/Footer";

const values = [
	{image: "http://i.imgur.com/caS9AhG.jpg"},
	{image: "http://i.imgur.com/caS9AhG.jpg"},
	{image: "http://i.imgur.com/caS9AhG.jpg"},
	{image: "http://i.imgur.com/caS9AhG.jpg"},
	{image: "http://i.imgur.com/caS9AhG.jpg"},
	{image: "http://i.imgur.com/caS9AhG.jpg"},
	{image: "http://i.imgur.com/caS9AhG.jpg"},
	{image: "http://i.imgur.com/caS9AhG.jpg"},
	{image: "http://i.imgur.com/caS9AhG.jpg"},
	{image: "http://i.imgur.com/caS9AhG.jpg"},
	{image: "http://i.imgur.com/caS9AhG.jpg"},
	{image: "http://i.imgur.com/caS9AhG.jpg"},
	{image: "http://i.imgur.com/caS9AhG.jpg"},
]

export class CharacterSection extends React.Component {
	render() {
		return (

			<div>

				<Header  title="Characters" />

				<GridContainer spacing>

                    {values.map(x => {
                        return (

							<Column columnSize="6">

								<Card  title="title" subtitle="this is a subtitle"  image={x.image}/>
                                {/* */}

							</Column>

                        )
                    })}

				</GridContainer>

				<Footer />

			</div>
		)
	}
}