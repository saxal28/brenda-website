import React from "react";

export class HomeSection extends React.Component {
	render() {
		return (
			<div class="container">

				<section className="home">
					<div className="container">

						<h1>Book A <strong>Princess</strong> <br />For Your Next Party <span className="question-mark">!</span></h1>

						{/*<div className="overlay" />*/}

						<div className="button-row">
							<button>Gallery</button>

							<img className="image-left" src="http://i.imgur.com/7Okym4Z.png" />

							<button className="active">Book Now</button>
						</div>
					</div>
				</section>

				<section className="about">
					<div className="container full-height full-width">
						<div className="col-sm-6 full-height center-vertical-horizontal primary-theme-inverted">
							<h1>Who We Are</h1>
							<p>Happily Ever After STL specializes in providing princesses
								and disney characters to parties and events.
							</p>
							<div className="button-row">
								<button>Book Now</button>
								<button>Contact Us</button>
							</div>
						</div>
						<div className="col-sm-6 full-height no-padding image-col" />
					</div>
				</section>

					<section className="categories">
						<div className="container full-width full-height">
							<div className="col-sm-4 full-height category-box gallery">
								<h1>Gallery</h1>
								<div className="overlay" />
							</div>
							<div className="col-sm-4 full-height category-box cast">
								<h1>Cast</h1>
								<div className="overlay" />
							</div>
							<div className="col-sm-4 full-height category-box characters">
								<h1>Characters</h1>
								<div className="overlay" />
							</div>
						</div>
					</section>

					<section className="contact">
						<h1>Have Questions <span className="question-mark">?</span></h1>

						<h2>Send them to us</h2>

						<img src="http://i.imgur.com/UyBY6B0.png" className="image-right" />

						<div className="button-row">
							<button>Contact Us</button>
						</div>

					</section>

					<section className="footer">
						{/*<h1>Follow Us <span className="question-mark">!</span> </h1>*/}

						<div className="social-media-row">
							<i className="fa fa-facebook" />
							<i className="fa fa-instagram" />
							<i className="fa fa-twitter" />
						</div>

					</section>

			</div>
		)
	}
}