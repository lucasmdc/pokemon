import React from 'react'

import './styles.css'

const BaseButton = props => {
	function handleClick(ev) {
		props.onClick(ev)
	}

	return (
		<button
			className={`base-button ${props.classes}`}
			onClick={handleClick}
			disabled={props.disabled}
		>{props.children}</button>
	)
}

export default BaseButton