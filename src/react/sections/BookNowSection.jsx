import React from "react";
import {observer} from "mobx-react";
import {ValidationIcon} from "../components/ValidationIcon";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'
import {BookNowSteps, bookNowStore} from "../forms/BookNowForm";
const {handleChange, store, sendEmail, selectDate } = bookNowStore;



const handleSubmit = e =>  {
	e.preventDefault();
	console.log("submit", bookNowStore.store)
}


const submitBookNowRequest = () => sendEmail();

const isCompleted = value => value && value.length !== 0 && value !== "";

const {SelectDate, SelectTime, SelectCharacters, EnterContactInfo, Review} = BookNowSteps;


export default observer(class BookNowSection extends React.Component {

	state = { activeStep: SelectDate };

    activeStep(step) {

		const {activeStep} = this.state;

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
			case SelectTime:
				return "Select Event Times";
			case EnterContactInfo:
				return "Enter Contact Info";
			case Review:
				return "Lets Review";
			default:
				return "title"
		}
	}

	render() {

		const activeStep = this.activeStep.bind(this)
		const toStep = this.toStep.bind(this)
		const getStepTitle = this.getStepTitle.bind(this)

		const {selectedDate, selectedTime, fullName, email, notes, startTime, endTime } = store
		const {emailSent, emailSending} = bookNowStore

		const date = moment(selectedDate).format("MMM DD, YYYY")

		return (
			<section className="contact">

				<div className="container">

					<div className="row">

						<div className="col-xs-12">
							<h1>Request A Booking</h1>
							{/*<h2>{getStepTitle()}</h2>*/}
						</div>

						<div className="col-xs-12">

							<form onSubmit={handleSubmit}>

								{activeStep(SelectDate) &&
                                <div>

                                    <div className="input-block date">
                                        <h3>Date</h3>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={selectDate}
                                            withPortal
                                        />
                                        <ValidationIcon completed={isCompleted(selectedDate)}/>
                                    </div>

                                    <div className="button-row">
                                        <button onClick={() => toStep(SelectTime)}>Next</button>
                                    </div>
                                </div>
								}

								{activeStep(SelectTime) &&
								<div>

									<div className="input-block">
                                        <h3>Start</h3>
                                        <input type="time" placeholder="Select Start Time" onChange={(e) => handleChange("startTime", e)} autoFocus="autofocus"/>
                                        <ValidationIcon completed={isCompleted(startTime)}/>
									</div>

                                    <div className="input-block">
                                        <h3>End</h3>
                                        <input type="time" placeholder="Select End Time" onChange={(e) => handleChange("endTime", e)}/>
                                        <ValidationIcon completed={isCompleted(endTime)}/>
                                    </div>

									<div className="button-row">
										<button onClick={() => toStep(EnterContactInfo)}>Next</button>
									</div>
								</div>}

								{activeStep(EnterContactInfo) &&
								<div>

									<div className="input-block">
                                        <h3>Name</h3>
										<input type="text" placeholder="Full Name" onChange={(e) => handleChange("fullName", e)} autoFocus="autofocus"/>
										<ValidationIcon completed={isCompleted(fullName)}/>
									</div>

									<div className="input-block">
                                        <h3>Email</h3>
										<input type="text" placeholder="Email" onChange={(e) => handleChange("email", e)}/>
										<ValidationIcon completed={isCompleted(email)}/>
									</div>

									<div className="input-block">
                                        <h3>Notes</h3>
										<input type="text" placeholder="Notes" onChange={(e) => handleChange("notes", e)}/>
										<ValidationIcon completed={isCompleted(notes)}/>
									</div>

									<div className="button-row">
										<button onClick={() => toStep(Review)}>Next</button>
									</div>

								</div>}

								{activeStep(Review) &&
								<div>

									<div className="input-block">
                                        <h3>Date</h3>
										<input type="text" placeholder="Selected Date" value={date} />
										<ValidationIcon completed={isCompleted(selectedDate)}/>
									</div>

                                    <div className="input-block two-col">
                                        <h3>Start</h3>
                                        <input type="time" placeholder="Start Time" value={startTime}/>
                                        <h3>End</h3>
                                        <input type="time" placeholder="End Time" value={endTime}/>
                                        <ValidationIcon completed={isCompleted(fullName)}/>
                                    </div>

								    <div className="input-block">
                                        <h3>Name</h3>
										<input type="text" placeholder="Full Name" value={fullName}/>
										<ValidationIcon completed={isCompleted(fullName)}/>
									</div>

									<div className="input-block">
                                        <h3>Email</h3>
										<input type="text" placeholder="Email" value={email}/>
										<ValidationIcon completed={isCompleted(email)}/>
									</div>

									<div className="input-block">
                                        <h3>notes</h3>
										<input type="text" placeholder="notes" value={notes}/>
										<ValidationIcon completed={isCompleted(notes)}/>
									</div>

									<div className="button-row">
										{!emailSent && <button onClick={submitBookNowRequest}>{emailSending ? "Sending..." : "Send Request"}</button>}
										{emailSent && <button className="active" >Booking Received!</button>}
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