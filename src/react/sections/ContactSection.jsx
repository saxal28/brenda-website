import React from "react";

export class ContactSection extends React.Component {
	render() {
		return (
			<div class="container">

				<section className="contact">

					<div className="row">
						<div className="col-sm-6">
							<h1>Have Questions<span className="question-mark">?</span></h1>
							<h2>Send us a message</h2>
						</div>

						<div className="col-sm-6">
							<input type="text" placeholder="Full Name"/>
							<input type="text" placeholder="Email"/>
							<input type="text" placeholder="Subject"/>
							<textarea rows="4" placeholder="Message here..."/>
							<div className="button-row">
								<button>Send!</button>
							</div>

						</div>
					</div>

				</section>


			</div>
		)
	}
}