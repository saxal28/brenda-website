import React from "react";
import {observer} from "mobx-react";
import {ValidationIcon} from "../components/ValidationIcon";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {BookNowSteps, bookNowStore} from "../forms/BookNowForm";
import {ContentContainer} from "../components/ContentContainer";
import {Header} from "../components/Header";
const {handleChange, store, sendEmail, selectDate } = bookNowStore;



const handleSubmit = e =>  {
	e.preventDefault();
	console.log("submit", bookNowStore.store)
}


const submitBookNowRequest = () => sendEmail();

const isCompleted = value => value && value.length !== 0 && value !== "";
const isTimeCompleted = (a,b) => Boolean(a && b);


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

		const {selectedDate, fullName, email, notes, startTime, endTime } = store
		const {emailSent, emailSending} = bookNowStore

		return (

		    <div>
                <Header height="10vh" color="transparent"/>
                <ContentContainer>

                    <h1>Request A Booking</h1>

                    <form onSubmit={handleSubmit}>

                        {/*{activeStep(SelectDate) &&*/}
                        {/*<div>*/}

                            {/*<div className="input-block date">*/}
                                {/*<DatePicker*/}
                                    {/*selected={selectedDate}*/}
                                    {/*onChange={selectDate}*/}
                                    {/*withPortal*/}
                                {/*/>*/}
                                {/*<ValidationIcon completed={isCompleted(selectedDate)}/>*/}
                            {/*</div>*/}

                            {/*<div className="button-row">*/}
                                {/*<button onClick={() => toStep(SelectTime)}>Next</button>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*}*/}

                        {/*{activeStep(SelectTime) &&*/}
                        {/*<div>*/}

                            {/*<div className="input-block">*/}
                                {/*<input type="time" placeholder="Select Start Time" onChange={(e) => handleChange("startTime", e)} autoFocus="autofocus"/>*/}
                                {/*<ValidationIcon completed={isCompleted(startTime)}/>*/}
                            {/*</div>*/}

                            {/*<div className="input-block">*/}
                                {/*<input type="time" placeholder="Select End Time" onChange={(e) => handleChange("endTime", e)}/>*/}
                                {/*<ValidationIcon completed={isCompleted(endTime)}/>*/}
                            {/*</div>*/}

                            {/*<div className="button-row">*/}
                                {/*<button onClick={() => toStep(EnterContactInfo)}>Next</button>*/}
                            {/*</div>*/}
                        {/*</div>}*/}

                        {/*{activeStep(EnterContactInfo) &&*/}
                        {/*<div>*/}

                            {/*<div className="input-block">*/}
                                {/*<input type="text" placeholder="Full Name" onChange={(e) => handleChange("fullName", e)} autoFocus="autofocus"/>*/}
                                {/*<ValidationIcon completed={isCompleted(fullName)}/>*/}
                            {/*</div>*/}

                            {/*<div className="input-block">*/}
                                {/*<input type="text" placeholder="Email" onChange={(e) => handleChange("email", e)}/>*/}
                                {/*<ValidationIcon completed={isCompleted(email)}/>*/}
                            {/*</div>*/}

                            {/*<div className="input-block">*/}
                                {/*<input type="text" placeholder="Notes" onChange={(e) => handleChange("notes", e)}/>*/}
                                {/*<ValidationIcon completed={isCompleted(notes)}/>*/}
                            {/*</div>*/}

                            {/*<div className="button-row">*/}
                                {/*<button onClick={() => toStep(Review)}>Next</button>*/}
                            {/*</div>*/}

                        {/*</div>}*/}

                        <div>

	                        <div className="input-block date">
		                        <DatePicker
			                        selected={selectedDate}
			                        onChange={selectDate}
			                        withPortal
			                        placeholderText="click to select a date"
		                        />
		                        <ValidationIcon completed={isCompleted(selectedDate)}/>
	                        </div>

                            <div className="input-block two-col">
                                <input type="text" placeholder="Start Time" onChange={(e) => handleChange("startTime", e)} />
	                            <input type="text" placeholder="End Time" onChange={(e) => handleChange("endTime", e)} />
                                <ValidationIcon completed={isTimeCompleted(startTime, endTime)}/>
                            </div>

                            <div className="input-block">
                                <input type="text" placeholder="Full Name" onChange={(e) => handleChange("fullName", e)} />
                                <ValidationIcon completed={isCompleted(fullName)}/>
                            </div>

                            <div className="input-block">
                                <input type="text" placeholder="Email" onChange={(e) => handleChange("email", e)} />
                                <ValidationIcon completed={isCompleted(email)}/>
                            </div>

                            <div className="input-block">
                               <input type="text" placeholder="notes" onChange={(e) => handleChange("notes", e)} />
                                <ValidationIcon completed={isCompleted(notes)}/>
                            </div>

                            <div className="button-row">
                                {!emailSent && <button onClick={submitBookNowRequest}>{emailSending ? "Sending..." : "Send Request"}</button>}
                                {emailSent && <button className="active" >Booking Received!</button>}
                            </div>
                        </div>


                    </form>
                </ContentContainer>
            </div>

		)
	}
})