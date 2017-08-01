import React from "react";

export class HomeSection extends React.Component {
	render() {
		return (
			<div class="container">

				<section className="home">
					<div className="container">
						<h1>Book A <strong>Princess</strong> <br />For Your Next Party</h1>
						<div className="button-row">
							<button>Gallery</button>
							<button className="active">Book Now</button>
						</div>
					</div>
				</section>

				<section className="about">
					<div className="container full-height full-width">
						<div className="col-sm-6 full-height center-vertical-horizontal primary-theme">
							<h1>Who We Are</h1>
							<p>Happily Ever After STL specializes in providing princesses
								and disney characters to parties and events.
							</p>
							<button>Book Now</button>
						</div>
						<div className="col-sm-6 full-height no-padding image-col">
						</div>
					</div>
				</section>

					{/*<section className="categories">*/}
						{/*<div className="container full-width full-height">*/}
							{/*<div className="col-sm-4 full-height goldenrod">*/}
								{/*<div className="category-box">*/}
									{/*<h1>Cast</h1>*/}
								{/*</div>*/}
							{/*</div>*/}
							{/*<div className="col-sm-4 full-height goldenrod">*/}
								{/*<div className="category-box">*/}
								{/*<h1>Cast</h1>*/}
								{/*</div>*/}
							{/*</div>*/}
							{/*<div className="col-sm-4 full-height goldenrod">*/}
								{/*<div className="category-box">*/}
								{/*<h1>Cast</h1>*/}
								{/*</div>*/}
							{/*</div>*/}
						{/*</div>*/}
					{/*</section>*/}

				<section className="about">
					<div className="container full-height full-width">
						<div className="col-sm-6 full-height center-vertical-horizontal primary-theme-inverted">
							<h1>Who We Are</h1>
							<p>Happily Ever After STL specializes in providing princesses
								and disney characters to parties and events.
							</p>
							<button>Book Now</button>
						</div>
						<div className="col-sm-6 full-height no-padding primary-theme">
						</div>
					</div>
				</section>

			</div>
		)
	}
}