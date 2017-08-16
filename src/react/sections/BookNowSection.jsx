import React from "react";
import {observer} from "mobx-react";
import {ValidationIcon} from "../components/ValidationIcon";
import {BookNowStore} from "../../stores/BookNowStore";
import {TestEmail} from "../emails/TestEmail";
import axios from 'axios'
import {SendContactEmail} from "../../lib/API/EmailApi";

const viewStore = new BookNowStore();
const {handleChange, store, sendEmail} = viewStore;

const Steps = {
	SelectDate: "SelectDate",
	SelectCharacters: "SelectCharacters",
	EnterContactInfo: "EnterContactInfo",
	Review: "Review"
}

const handleSubmit = e =>  {
	e.preventDefault();
	console.log("submit")
}

const submitBookNowRequest = () => {
	sendEmail()
}

const isCompleted = value => value && value.length !== 0 ? true : false

const {SelectDate, SelectCharacters, EnterContactInfo, Review} = Steps;


export default observer(class BookNowSection extends React.Component {

	state = { activeStep: SelectDate }

	activeStep(step) {

		const {activeStep} = this.state

		if (step === activeStep) return true
	}

	toStep(step) {
		this.setState({ activeStep: step })
	}

	getStepTitle() {
		const {activeStep} = this.state

		switch(activeStep) {
			case SelectDate:
				return "Select A Date";
			case SelectCharacters:
				return "Select Characters";
			case EnterContactInfo:
				return "Enter Contact Info";
			case Review:
				return "Lets Review";
			default:
				return "title"
		}
	}

	componentWillMount() {
		console.log("hi")
		axios.get("https://us-central1-brenda-website.cloudfunctions.net/addMessage")
			.then(() => console.log("success"))
			.catch(e => console.log(e))

		axios.post("https://us-central1-brenda-website.cloudfunctions.net/addMessage")
			.then(() => console.log("success"))
			.catch(e => console.log(e))
	}

	render() {

		const activeStep = this.activeStep.bind(this)
		const toStep = this.toStep.bind(this)
		const getStepTitle = this.getStepTitle.bind(this)

		const {selectedDate, selectedCharacters, fullName, email, notes} = store


		return (
			<section className="contact">

				<TestEmail/>

				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<h1>Book Now</h1>
							<h3>{getStepTitle()}</h3>
						</div>

						<div className="col-xs-12">

							<form onSubmit={handleSubmit}>

								{activeStep(SelectDate) && <div>
								<div className="input-block">
									<input type="text" placeholder="Select Date" onChange={(e) => handleChange("selectedDate", e)}/>
									<ValidationIcon completed={isCompleted(selectedDate)}/>
								</div>
								<div className="button-row">
									<button onClick={() => toStep(SelectCharacters)}>Next</button>
								</div>
									</div>}

								{activeStep(SelectCharacters) && <div>
									<div className="input-block">
										<input type="text" placeholder="Select Characters" onChange={(e) => handleChange("selectedCharacters", e)}/>
										<ValidationIcon completed={isCompleted(selectedCharacters)}/>
									</div>
									<div className="button-row">
										<button onClick={() => toStep(EnterContactInfo)}>Next</button>
									</div>
								</div>}

								{activeStep(EnterContactInfo) && <div>
									<div className="input-block">
										<input type="text" placeholder="Full Name" onChange={(e) => handleChange("fullName", e)}/>
										<ValidationIcon completed={isCompleted(fullName)}/>
									</div>
									<div className="input-block">
										<input type="text" placeholder="Email" onChange={(e) => handleChange("email", e)}/>
										<ValidationIcon completed={isCompleted(email)}/>
									</div>
									<div className="input-block">
										<input type="text" placeholder="Notes" onChange={(e) => handleChange("notes", e)}/>
										<ValidationIcon completed={isCompleted(notes)}/>
									</div>
									<div className="button-row">
										<button onClick={() => toStep(Review)}>Next</button>
									</div>
								</div>}

								{activeStep(Review) && <div>
									<div className="input-block">
										<input type="text" placeholder="Selected Date" value={selectedDate}/>
										<ValidationIcon completed={isCompleted(selectedDate)}/>
									</div>
									<div className="input-block">
										<input type="text" placeholder="Selected Characters" value={selectedCharacters}/>
										<ValidationIcon completed={isCompleted(selectedCharacters)}/>
									</div>
									<div className="input-block">
										<input type="text" placeholder="Full Name" value={fullName}/>
										<ValidationIcon completed={isCompleted(fullName)}/>
									</div>
									<div className="input-block">
										<input type="text" placeholder="Email" value={email}/>
										<ValidationIcon completed={isCompleted(email)}/>
									</div>
									<div className="input-block">
										<input type="text" placeholder="notes" value={notes}/>
										<ValidationIcon completed={isCompleted(notes)}/>
									</div>
									<div className="button-row">
										<button onClick={submitBookNowRequest}>Submit!</button>
									</div>
								</div>}
							</form>

						</div>
					</div>

				</div>

			</section>

		)
	}
})