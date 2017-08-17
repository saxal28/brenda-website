import { extendObservable, action } from "mobx";
import {sendTestMail} from "../lib/emails";
import {AccountEmail} from "../app-config";
import {SendBookNowEmail} from "../lib/API/EmailApi";

export class BookNowStore {

	constructor() {
		extendObservable(this, {
			selectedDate: new Date(),

			store: {
				selectedDate: "",
				selectedCharacter: "",
				fullName: "",
				email: "",
				notes: "",
			},

			emailSent: false,

			handleChange: action((field, e) => {
				this.store[field] = e.target.value;
			}),

			onEmailSuccess: action(() => {
				this.emailSent = true
			}),

			selectDate: action((date) => {
				this.store.selectedDate = date
			}),


			sendEmail: action(() => {

				const {selectedDate, fullName, selectedCharacter, email, notes} = this.store;

				const bookNowEmail = {
					"to": AccountEmail,
					"from": "Alan Sax",
					"subject": `You have a new booking for ${selectedDate}!`,
					"text": `Hey Brenda, you have   a new booking! Follow the link for more details!
					
							Quick Summary: ${fullName} has booked a party for ${selectedDate} and has requested the following characters: ${selectedCharacter}.
							 
							They even left some notes: ${notes}
							 
							Contact them at this email ${email}
							`,
				}

				SendBookNowEmail(bookNowEmail);

			})
		})
	}

}