import React from 'react';
import {ValidationIcon} from "../ValidationIcon";
import {observer} from 'mobx-react';

//validator
const isCompleted = value => value && value.length !== 0 && value !== "";

export default observer(class Input extends React.Component {


    componentWillUpdate() {
        console.log(this.props)
    }

    render() {

        console.log(this.props)

        const { onChange, label, field, type, placeholder, autofocus, value } = this.props

        return (

            <div className="input-block">

                <h3>{label}</h3>

                <input
                    type={type ? type : "text"}
                    placeholder={placeholder ? placeholder : ""}
                    autoFocus={autofocus ? "autofocus" : ""}
                    onChange={(e) => onChange(field, e)}
                    value={value ? value : ""}
                />

                <ValidationIcon completed={isCompleted(field)}/>

            </div>

        )
    }

})