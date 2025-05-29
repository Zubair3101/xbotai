import React from 'react';
import './NewChat.css';
import editIcon from '../assets/edit.png';
import logosmall from '../assets/logosmall.png';

export default function NewChat(props) {
	return (
		<div className="new-chat-wrapper">
			<button className="new-chat-button" onClick={props.handleClickNewChat}>
				<img src={logosmall} alt="logosmall" className="chat-icon" />
				New Chat
				<img src={editIcon} alt="editIcon" className="edit-icon" />
			</button>
		</div>
	);
}
