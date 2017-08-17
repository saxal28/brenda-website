import { extendObservable, action } from "mobx";
import {sendTestMail} from "../lib/emails";

import {AccountEmail} from "../app-config";
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

			emailSent: false,

			handleChange: action((field, e) => {
				this.store[field] = e.target.value;
			}),

			onEmailSuccess: action(() => {
				this.emailSent = true
			}),

			sendEmail: action(() => {
				const {fullName, email, subject, text} = this.store
				const contactEmail = {
					to: AccountEmail,
					from: fullName,
					subject,
					text: `Hey Brenda, You Have A New Message!${"\n\n"}${text}${"\n\n"}sent from - ${fullName} at ${email}`,
				}

				SendContactEmail(contactEmail);
			})
		})
	}

}