import React from "react";
import firebase from "firebase";
import _ from "lodash";
import { observer } from "mobx-react";
import {ImageStore} from "../../stores/ImageStore";
// import {UploadButton} from "./common/UploadButton";

const store = new ImageStore();

export default observer(class GallerySection extends React.Component {

	state = { currentImage: 0 }

	componentWillMount() {

		firebase.database().ref("images").on("value", snapshot => {
			store.content = snapshot.val();
		})
	}

	nextImage(values) {

		const { currentImage } = this.state;
		if(currentImage < values.length - 1) {
			let newImageIndex = currentImage + 1;
			this.setState({currentImage: newImageIndex})
		} else {
			this.setState({currentImage: 0})
		}
	}

	previousImage(values) {
		const { currentImage } = this.state;
		if(currentImage > 0) {
			let newImageIndex = currentImage - 1;
			this.setState({currentImage: newImageIndex})
		} else {
			this.setState({currentImage: values.length - 1})
		}
	}

	render() {

		const {currentImage} = this.state;

		let { content } = store;
		const uids = _.keys(content);
		const values = _.values(content);

		values.map((x, index) => {
			x.uid = uids[index];
		})

		// const url = values.length > 0 ? values[0].url : "";
		console.log(values)

		return (
			<section className="gallery">

					<div className="gallery-container">
						{values.length> 0 && <img src={values[currentImage].url} alt="gallery" />}
						<div className="gallery-button previous" onClick={() => this.previousImage(values)}><span>-</span></div>
						<div className="gallery-button next" onClick={() => this.nextImage(values)}><span>+</span></div>
					</div>

			</section>
		)
	}
})