import { extendObservable, action } from "mobx";
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
				startTime: "",
				endTime: "",
			},

			emailSent: false,
			emailSending: false,

			handleChange: action((field, e) => {
				console.log(field,e.target.value)
				this.store[field] = e.target.value;
			}),

			onEmailSuccess: action(() => {
				this.emailSent = false
				this.emailSent = true
			}),

			selectDate: action((date) => {
				this.store.selectedDate = date
			}),


			sendEmail: action(() => {

				const {selectedDate, fullName, email, notes, startTime, endTime} = this.store;

				const bookNowEmail = {
					"to": AccountEmail,
					"from": "Alan Sax",
					"subject": `You have a new booking for ${moment(selectedDate).format("MMM-DD")}!`,
					"text": `Hey Brenda, You Have A New Booking!${"\n\n"}Quick Summary:${"\n"}${fullName} has booked a party for ${moment(selectedDate).format("MM/DD/YYYY")} from ${startTime} to ${endTime} ${"\n\n"}They even left some notes:${"\n"}${notes}${"\n\n"}Contact ${fullName} at this email ${email}!
					`,
				}

				this.emailSending = true;

				SendBookNowEmail(bookNowEmail);

			})
		})
	}

}