import axios from "axios"

const contactURL = "http://floating-taiga-59862.herokuapp.com/email/contact"

export const SendContactEmail = ({to, from, subject, text}) => {
	axios.post(contactURL, {to, from, subject, text})
		.then(() => console.log("success!"))
		.catch(e => console.error(e))
}