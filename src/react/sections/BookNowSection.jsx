import React from "react";

export class BookNowSection extends React.Component {
	render() {
		return (
			<section className="contact">

				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<h1>Book Now</h1>
							<h3>Select A Date</h3>
						</div>

						<div className="col-xs-12">

							<div className="input-block">
								<input type="text" placeholder="Select Date"/>
							</div>
							<div className="button-row">
								<button>Next</button>
							</div>

						</div>
					</div>

				</div>

			</section>

		)
	}
}