import { extendObservable, action } from "mobx";
import {sendTestMail} from "../lib/emails";

import {SendContactEmail} from "../lib/API/EmailApi";

export class ContactStore {

	constructor() {
		extendObservable(this, {
			selectedDate: "Jan 4, 2016",
			store: {
				fullName: "",
				email: "",
				subject: "",
				text: "",
			},
			handleChange: action((field, e) => {
				this.store[field] = e.target.value;
			}),
			sendEmail: action(() => {
				const {fullName, email, subject, text} = this.store
				const contactEmail = {
					to: email,
					from: fullName,
					subject,
					text,
				}

				console.log("email", email)

				SendContactEmail(contactEmail);
			})
		})
	}

}