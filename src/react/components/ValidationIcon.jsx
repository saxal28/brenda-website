import React from 'react';

export class ValidationIcon extends React.Component {

	render(){

		const {completed} = this.props

		return (
			<div>
				{completed && <i className="fa fa-check" />}
				{!completed && <i className="fa fa-times-circle-o" />}
			</div>
		)
	}
}