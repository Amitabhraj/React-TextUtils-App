import React from 'react'

export default function Alert(props) {
	return (
	<div style={{height: '60px'}}>
	{props.alert &&
	<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
	  {props.alert.msg}
	</div>}
	</div>

	)
}