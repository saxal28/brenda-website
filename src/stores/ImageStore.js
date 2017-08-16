import { extendObservable } from "mobx";
import firebase from 'firebase';

export class ImageStore {

	constructor() {
		extendObservable(this, {
			content: [],
			image: {
				url: "",
				category: "default",
				description: ""
			},
		})
	}

	addImage(e) {

		e.preventDefault()

		firebase.database().ref('images').push(this.image)
		this.image = {};
	}

	updateImage(field, e) {

		switch(field) {
			case "url":
				console.log(field, e.target.value)
				return this.image.url = e.target.value;
			default:
				return true
		}

	}

	addImages(images) {

		images.forEach(image => {
			firebase.database().ref("images").push({
				image,
				category: "default",
				description: ""
			})
		})
	}

}