import React from "react";

export class BookNowSection extends React.Component {
	render() {
		return (
			<section className="contact">

				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<h1>Book Now</h1>
							<h3>Select A Date!</h3>
						</div>

						{/*//todo -- book now flow*/}
						{/*step 1 -- select date*/}
						{/*step 2 - select characters*/}
						{/*step 3 - fill out contact info*/}

						<div className="col-sm-6">
							{/*<input type="text" placeholder="Full Name"/>*/}
							{/*<input type="text" placeholder="Email"/>*/}
							<input type="text" placeholder="Date Selector"/>
							{/*<input type="text" placeholder="Characters Dropdown"/>*/}
							{/*<textarea rows="4" placeholder="Message here..."/>*/}
							<div className="button-row">
								<button>Send!</button>
							</div>

						</div>
					</div>

				</div>

			</section>

		)
	}
}