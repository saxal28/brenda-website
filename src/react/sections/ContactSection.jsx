import React from "react";

export class ContactSection extends React.Component {
	render() {
		return (
				<section className="contact">

					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<h1>Have Questions<span className="question-mark">?</span></h1>
								<h2>Send us a message</h2>
							</div>

							<div className="col-xs-12">
								<div className="input-block">
									<input type="text" placeholder="Full Name"/>
								</div>
								<div className="input-block">
									<input type="text" placeholder="Email"/>
								</div>
								<div className="input-block">
									<input type="text" placeholder="Subject"/>
								</div>
								<div className="input-block">
									<textarea rows="4" placeholder="Message here..."/>
								</div>
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