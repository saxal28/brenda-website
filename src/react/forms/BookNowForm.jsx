import React from "react";
import {BookNowStore} from "../../stores/BookNowStore";
import DateInput from "../components/inputs/DateInput";
import Input from "../components/inputs/Input";
import {observer} from "mobx-react";

export const bookNowStore = new BookNowStore();

const {handleChange, store, selectDate } = bookNowStore;
const {selectedDate,  fullName } = store


// TODO -- handles everything related to the form

const dateProps = {
    label: "Date",
    selectDate,
    selectedDate,
}


// Define Constants
export const BookNowSteps = {
    SelectDate: "SelectDate",
    SelectTime: "Select Time",
    SelectCharacters: "SelectCharacters",
    EnterContactInfo: "EnterContactInfo",
    Review: "Review",
}


export default observer(class BookNowForm {

    get Date() {
        return <DateInput {...dateProps} />
    }

    get Name() {

        const props = { label: "fullName", onChange: handleChange, field: "fullName",  value: fullName}

        return <Input {...props} />
    }
})