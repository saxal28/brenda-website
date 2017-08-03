import React from "react";

export class ContactSection extends React.Component {
	render() {
		return (
			<div class="container">

				<section className="contact">
					<h1>Have Questions</h1>

					<h2>Send US Your Questions <span className="question-mark">!</span></h2>

					<div className="button-row">
						<button>Contact Us</button>
					</div>

				</section>


			</div>
		)
	}
}