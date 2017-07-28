import React from "react";

export class HomeSection extends React.Component {
	render() {
		return (
			<div class="container">

				<section className="home">
					<div className="container">
						<h1>Book A <strong>Princess</strong> For Your Next Party</h1>
						<div className="button-row">
							<button>Gallery</button>
							<button className="active">Book Now</button>
						</div>
					</div>
				</section>

				<section className="about">
					<h1><strong>Who We Are</strong></h1>
				</section>

			</div>
		)
	}
}