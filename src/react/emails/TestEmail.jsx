import Script from 'react-load-script'
import React from 'react';

export class TestEmail extends React.Component {

	state = {}

	handleScriptCreate() {
		this.setState({ scriptLoaded: false })
	}

	handleScriptError() {
		this.setState({ scriptError: true })
	}

	handleScriptLoad() {
		this.setState({ scriptLoaded: true })
	}

	sendEmail() {

	}

	render() {
		return (
			<div>
				<Script
					url="https://smtpjs.com/smtp.js"
					onCreate={this.handleScriptCreate.bind(this)}
					onError={this.handleScriptError.bind(this)}
					onLoad={this.handleScriptLoad.bind(this)}
				/>

			</div>
		)
	}
}
