import axios from "axios"
import {bookNowStore} from "../../react/sections/BookNowSection";
import {contactStore} from "../../react/sections/ContactSection";

const contactURL = "http://localhost:3084/email/contact"

export const SendContactEmail = ({to, from, subject, text}) => {
	axios.post(contactURL, {to, from, subject, text})
		.then(() => {
			console.log("success!");
			contactStore.onEmailSuccess()
		})
		.catch(e => console.error(e))
}

export const SendBookNowEmail = ({to, from, subject, text}) => {
	axios.post(contactURL, {to, from, subject, text})
		.then(() => {
			console.log("success!");
			bookNowStore.onEmailSuccess()
		})
		.catch(e => console.error(e))
}