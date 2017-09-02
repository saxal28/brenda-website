import React from "react";
import firebase from "firebase";
import _ from "lodash";
import { observer } from "mobx-react";
import {ImageStore} from "../../stores/ImageStore";
import FileUploader from 'react-firebase-file-uploader';

// import {UploadButton} from "./common/UploadButton";

const store = new ImageStore();

export default observer(class GallerySection extends React.Component {

	state = { currentImage: 0 }

	handleChangeUsername = (event) => this.setState({username: event.target.value});
	handleUploadStart = () => this.setState({isUploading: true, progress: 0});
	handleProgress = (progress) => this.setState({progress});
	handleUploadError = (error) => {
		this.setState({isUploading: false});
		console.error(error);
	}
	handleUploadSuccess = (filename) => {
		this.setState({avatar: filename, progress: 100, isUploading: false});
		firebase.database().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
	};

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

		console.log(firebase.storage().ref().child("19125910_10209781557031341_1693975192_o.jpg"))

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

						{/*<FileUploader*/}
							{/*accept="image/*"*/}
							{/*name="avatar"*/}
							{/*randomizeFilename*/}
							{/*storageRef={firebase.storage().ref("images")}*/}
							{/*onUploadStart={this.handleUploadStart}*/}
							{/*onUploadError={this.handleUploadError}*/}
							{/*onUploadSuccess={this.handleUploadSuccess}*/}
							{/*onProgress={this.handleProgress}*/}
						{/*/>*/}

					</div>


			</section>
		)
	}
})