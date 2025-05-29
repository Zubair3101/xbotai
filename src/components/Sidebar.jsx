import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
	return (
		<div className="sidebar-container">
			<a href="/" className="styled-button">New Chat</a>
			<a href="/history" className="styled-button">Past Conversations</a>
		</div>
	);
}
