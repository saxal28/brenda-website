import React from "react";



export class HomeSection extends React.Component {

	navigateTo(url) {
		this.props.history.push(`/${url}`)
	}

	render() {

		const navigateTo = this.navigateTo.bind(this)

		return (
			<div>

				<section className="home">
					<div className="container">

						<h1>Book A <strong>Princess</strong> <br />For Your Next Party!</h1>

						<div className="button-row">
							<button onClick={() => navigateTo('gallery')}>Gallery</button>
							<button className="active" onClick={() => navigateTo('book-now')}>Book Now</button>
						</div>

					</div>
				</section>

				<section className="about hide-mobile">

					<div className="container full-height full-width">

						<div className="col-sm-6 full-height center-vertical-horizontal primary-theme-inverted">
							<h1>Who We Are</h1>
							<p>Happily Ever After STL specializes in providing princesses
								and disney characters to parties and events.
							</p>
							<div className="button-row">
								<button onClick={() => navigateTo('book-now')}>Book Now</button>
								<button onClick={() => navigateTo('contact')}>Contact Us</button>
							</div>
						</div>

						<div className="col-sm-6 full-height no-padding image-col" />

					</div>

				</section>

					<section className="categories">
						<div className="container full-width full-height">

							<div className="col-sm-4 full-height category-box gallery" onClick={() => navigateTo('gallery')}>
								<h1>Gallery</h1>
								<div className="overlay" />
							</div>

							<div className="col-sm-4 full-height category-box cast" onClick={() => navigateTo('cast')}>
								<h1>Cast</h1>
								<div className="overlay" />
							</div>

							<div className="col-sm-4 full-height category-box characters" onClick={() => navigateTo('characters')}>
								<h1>Characters</h1>
								<div className="overlay" />
							</div>

						</div>
					</section>

					<section className="contact">

						<div className="container">

							<h1>Have Questions</h1>
							<h2>Send Them To Us</h2>

							<div className="button-row">
								<button onClick={() => navigateTo('contact')}>Contact Us</button>
								{/*<button className="active">Book Now</button>*/}
							</div>

						</div>


					</section>

					<section className="footer">

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