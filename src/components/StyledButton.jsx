import React from 'react';
import './StyledButton.css';

export default function StyledButton(props) {
	return (
		<button className="styled-button" onClick={props.handleClickPastConversations}>
			{props.text}
		</button>
	);
}
