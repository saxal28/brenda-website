import React from "react";
import {ContactStore} from "../../stores/ContactStore";
import {observer} from "mobx-react";

export const contactStore = new ContactStore();
const {handleChange, store, sendEmail} = contactStore;

const submitContact = () => sendEmail()

export default observer(class ContactSection extends React.Component {

	render() {

		const {emailSent, emailSending} = contactStore

		return (
				<section className="contact">

					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<h1>Have A Question?</h1>
								<h2>Send us a message</h2>
							</div>

							<div className="col-xs-12">
								<div className="input-block">
									<input type="text" placeholder="Full Name" onChange={(e) => handleChange('fullName', e)}/>
								</div>
								<div className="input-block">
									<input type="text" placeholder="Email" onChange={(e) => handleChange('email', e)}/>
								</div>
								<div className="input-block">
									<input type="text" placeholder="Subject" onChange={(e) => handleChange('subject', e)}/>
								</div>
								<div className="input-block">
									<textarea rows="4" placeholder="Message here..." onChange={(e) => handleChange('text', e)}/>
								</div>
								<div className="button-row">
									{!emailSent && <button onClick={submitContact}>{emailSending ? "Sending" : "Send"}</button>}
									{emailSent && <button className="active">Email Sent!</button>}
								</div>

							</div>
						</div>

					</div>

				</section>

		)
	}
})