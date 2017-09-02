import React from 'react';
import DatePicker from "react-datepicker";
import {ValidationIcon} from "../ValidationIcon";
import {observer} from 'mobx-react';

//validator
const isCompleted = value => value && value.length !== 0 && value !== "";

export default observer(class DateInput extends React.Component {


    componentWillUpdate() {
        console.log(this.props)
    }

    render() {

        console.log(this.props)

        const { selectedDate, selectDate, label } = this.props

        return (

            <div className="input-block date">
                <h3>{label}</h3>
                <DatePicker
                    selected={selectedDate}
                    onChange={selectDate}
                    withPortal
                />

                <ValidationIcon completed={isCompleted(selectedDate)}/>

            </div>
        )
    }

})