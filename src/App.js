import React, { useEffect, useState } from "react";
import './App.css';
import ChatInterface from "./components/ChatInterface";
import Sidebar from "./components/Sidebar";
import Conversations from "./components/Conversations";
import Navbar from "./components/Navbar";
import data from "./sampleData.json";

function App() {
	const [aiData, setAiData] = useState([]);
	const [conversations, setConversations] = useState([]);
	const [showPastConversations, setShowPastConversations] = useState(false);
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState('');
	const [response, setResponse] = useState('');

	const updateMessages = (newMessage) => {
		setMessages(prevMessages => [...prevMessages, newMessage]);
	};

	const updateInput = (value) => {
		setInput(value);
	};

	useEffect(() => {
		setAiData(data);
	}, []);

	useEffect(() => {
		let res = aiData.filter((x) => x.question.includes(input));
		if (res.length === 0) {
			setResponse("As a AI language model, I cannot help you out!");
		} else {
			setResponse(res[0].response);
		}
	}, [input]);

	const updateConversations = () => {
		setConversations(prevConv => [...prevConv, messages]);
	};

	const updateShowPastConversations = () => {
		setShowPastConversations(true);
	};

	const handleClickNewChat = () => {
		setShowPastConversations(false);
		setMessages([]);
	};

	const handleSaveClick = () => {
		updateConversations();
	};

	return (
		<div className="App">
			<div className="grid-container">
				<div className="sidebar-section">
					<Sidebar
						handleClickNewChat={handleClickNewChat}
						handleClickPastConversations={updateShowPastConversations}
					/>
				</div>
				<div className="main-section">
					<Navbar />
					{showPastConversations ? (
						<Conversations conversations={conversations} />
					) : (
						<ChatInterface
							messages={messages}
							updateMessages={updateMessages}
							handleSaveClick={handleSaveClick}
							input={input}
							updateInput={updateInput}
							response={response}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
