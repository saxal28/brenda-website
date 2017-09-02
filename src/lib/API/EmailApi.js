import axios from "axios"
import {contactStore} from "../../react/sections/ContactSection";
import {bookNowStore} from "../../react/forms/BookNowForm";

// const contactURL = "http://localhost:3084/email/contact"
const contactURL = "http://floating-taiga-59862.herokuapp.com/email/contact"

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