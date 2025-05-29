import React from 'react';
import './Sidebar.css';
import NewChat from './NewChat';
import StyledButton from './StyledButton';

export default function Sidebar(props) {
	return (
		<div className="sidebar-container">
			<NewChat handleClickNewChat={props.handleClickNewChat} />
			<StyledButton text="Past Conversations" handleClickPastConversations={props.handleClickPastConversations} />
		</div>
	);
}
