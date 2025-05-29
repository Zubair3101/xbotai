import React from 'react';
import './Conversations.css';
import logo from "../assets/Logo.png";
import user from "../assets/userImage.png";
import logosmall from "../assets/logo87.png";

export default function Conversations(props) {
	return (
		<div className="conversations-container">
			<div className="conversations-header">
				<h2>Conversation History</h2>
			</div>

			<div className="conversations-list">
				<h3>Today's Chats</h3>

				{props.conversations.map((talk, index) => (
					<div className="conversation-card" key={index}>
						<div className="conversation-content">
							{talk.map((t, i) => (
								<div className="conversation-entry" key={i}>
									<img
										src={i % 2 === 0 ? user : logosmall}
										alt="user"
										className="conversation-avatar"
									/>
									<div className="conversation-text-group">
										<h4 className="conversation-sender">{t.sender}</h4>
										<p className="conversation-text">{t.text}</p>
										<p className="conversation-time">{t.time}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
