import { extendObservable, action } from "mobx";
import {sendTestMail} from "../lib/emails";
import {SendContactEmail} from "../lib/API/EmailApi";

export class BookNowStore {

	constructor() {
		extendObservable(this, {
			selectedDate: "Jan 4, 2016",
			store: {
				selectedDate: "",
				selectedCharacters: [],
				fullName: "",
				email: "",
				notes: "",
			},
			handleChange: action((field, e) => {
				this.store[field] = e.target.value;
			}),
			sendEmail: action(() => {
				const testEmail = {
					"to": "saxal28@yahoo.com",
					"from": "Alan Sax",
					"subject": "You Have A New Message!",
					"text": "Hey this is christina. what are your prices?? thanks!"
				}
				SendContactEmail(testEmail);
			})
		})
	}

}