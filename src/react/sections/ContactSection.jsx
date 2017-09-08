import React from "react";
import {ContactStore} from "../../stores/ContactStore";
import {observer} from "mobx-react";
import {GridContainer} from "../components/GridContainer";
import {Column} from "../components/Column";
import {Header} from "../components/Header";
import {ContentContainer} from "../components/ContentContainer";
import {ValidationIcon} from "../components/ValidationIcon";

export const contactStore = new ContactStore();
const {handleChange, store, sendEmail} = contactStore;

const submitContact = () => sendEmail()
const isCompleted = value => value && value.length !== 0 && value !== "";

export default observer(class ContactSection extends React.Component {

	render() {

		const {emailSent, emailSending} = contactStore
		const {fullName, email, subject, text} = contactStore.store

		return (

			<div>

				<Header height="10vh" color="transparent"/>

                <ContentContainer >

                    <h1>Questions?</h1>
                    <h3>Send them to us!</h3>

					<div className="input-block">
						<input type="text" placeholder="Full Name" onChange={(e) => handleChange('fullName', e)}/>
                        <ValidationIcon completed={isCompleted(fullName)}/>
                    </div>
					<div className="input-block">
						<input type="text" placeholder="Email" onChange={(e) => handleChange('email', e)}/>
						<ValidationIcon completed={isCompleted(email)}/>
					</div>
					<div className="input-block">
						<input type="text" placeholder="Subject" onChange={(e) => handleChange('subject', e)}/>
						<ValidationIcon completed={isCompleted(subject)}/>
					</div>
					<div className="input-block">
						<textarea rows="4" placeholder="Message here..." onChange={(e) => handleChange('text', e)}/>
						<ValidationIcon completed={isCompleted(text)}/>
					</div>
					<div className="button-row">
						{!emailSent && <button onClick={submitContact}>{emailSending ? "Sending" : "Send"}</button>}
						{emailSent && <button className="active">Email Sent!</button>}
					</div>

                </ContentContainer>

			</div>

		)
	}
})