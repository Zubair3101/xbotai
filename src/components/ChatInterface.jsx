import React, { useState } from 'react';
import './ChatInterface.css';
import logosmall from "../assets/logo87.png";
import user from "../assets/userImage.png";
import logo from "../assets/Logo.png";
import FeedbackModal from "./FeedbackModal";

const ChatInterface = (props) => {
	const [showThumbs, setShowThumbs] = useState(false);
	const [showRating, setShowRating] = useState(false);
	const [rating, setRating] = useState(0);
	const [open, setOpen] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const handleMouseEnter = (index) => {
		setHoveredIndex(index);
	};

	const handleMouseLeave = () => {
		setHoveredIndex(null);
	};

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleSend = () => {
		if (props.input.trim() === '') return;

		const newMessage = {
			text: props.input,
			sender: 'You',
			time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
			rate: rating,
		};

		props.updateMessages(newMessage);

		setTimeout(() => {
			const botResponse = {
				text: props.response,
				sender: 'Soul AI',
				time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
			};
			props.updateMessages(botResponse);
		}, 1000);
	};

	return (
		<div className="chat-interface-container">
			<div className="chat-message-list">
				{props.messages.map((message, index) => (
					<div
						className="chat-card"
						key={index}
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={handleMouseLeave}
					>
						<div className="chat-header">
							<img
								className="chat-avatar"
								src={message.sender === 'You' ? user : logo}
								alt="avatar"
							/>
							<div>
								<div className="chat-sender">
									{message.sender === 'Soul AI' ? <span>Soul AI</span> : message.sender}
								</div>
								<div className="chat-text">
									{message.sender === 'Soul AI' ? <p>{message.text}</p> : message.text}
								</div>
								<div className="chat-meta">
									<span className="chat-time">{message.time}</span>
									{message.sender === 'Soul AI' && hoveredIndex === index && !showRating && (
										<div className="chat-actions">
											<button className="chat-icon-btn" onClick={() => setShowRating(true)}>👍</button>
											<button className="chat-icon-btn" onClick={() => setShowRating(true)}>👎</button>
										</div>
									)}
									{message.sender === 'Soul AI' && hoveredIndex === index && showRating && (
										<div className="chat-rating">
											<select
												value={rating}
												onChange={(e) => {
													setRating(Number(e.target.value));
													setOpen(true);
												}}
											>
												<option value={0}>Rate</option>
												<option value={1}>1</option>
												<option value={2}>2</option>
												<option value={3}>3</option>
												<option value={4}>4</option>
												<option value={5}>5</option>
											</select>
											<FeedbackModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="chat-input-section">
				<input
					type="text"
					className="chat-input"
					value={props.input}
					onChange={(e) => props.updateInput(e.target.value)}
					onKeyDown={(e) => e.key === 'Enter' && handleSend()}
					placeholder="Message Bot AI…"
				/>
				<button className="chat-btn" type="submit" onClick={handleSend}>Ask</button>
				<button className="chat-btn" type="button" onClick={props.handleSaveClick}>Save</button>
			</div>
		</div>
	);
};

export default ChatInterface;
