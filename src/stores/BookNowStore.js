import { extendObservable, action } from "mobx";
import {sendTestMail} from "../lib/emails";
import {AccountEmail} from "../app-config";
import {SendBookNowEmail} from "../lib/API/EmailApi";
import moment from "moment";

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
					"subject": `You have a new booking for ${moment(selectedDate).format("MMM-DD")}!`,
					"text": `Hey Brenda, You Have A New Booking!${"\n\n"}Quick Summary:${"\n"}${fullName} has booked a party for ${moment(selectedDate).format("MMM-DD")} at time.${"\n\n"}They even left some notes:${"\n"}${notes}${"\n\n"}Contact ${fullName} at this email ${email}!
					`,
				}

				SendBookNowEmail(bookNowEmail);

			})
		})
	}

}