import React, { useEffect, useState } from "react";
import './App.css';
import ChatInterface from "./components/ChatInterface";
import Sidebar from "./components/Sidebar";
import Conversations from "./components/Conversations";
import Navbar from "./components/Navbar";
import data from "./sampleData.json";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function MainChat({ messages, updateMessages, handleSaveClick, input, updateInput, response }) {
	return (
		<ChatInterface
			messages={messages}
			updateMessages={updateMessages}
			handleSaveClick={handleSaveClick}
			input={input}
			updateInput={updateInput}
			response={response}
		/>
	);
}

function App() {
	const [aiData, setAiData] = useState([]);
	const [conversations, setConversations] = useState([]);
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
			setResponse("Sorry, Did not understand your query!");
		} else {
			setResponse(res[0].response);
		}
	}, [input]);

	const updateConversations = () => {
		setConversations(prevConv => [...prevConv, messages]);
	};

	const handleSaveClick = () => {
		updateConversations();
	};

	return (
		<Router>
			<div className="App">
				<div className="grid-container">
					<div className="sidebar-section">
						<Sidebar
							handleClickNewChat={() => window.location.href = '/'}
							handleClickPastConversations={() => window.location.href = '/history'}
						/>
					</div>
					<div className="main-section">
						<Navbar />
						<Routes>
							<Route
								path="/"
								element={
									<MainChat
										messages={messages}
										updateMessages={updateMessages}
										handleSaveClick={handleSaveClick}
										input={input}
										updateInput={updateInput}
										response={response}
									/>
								}
							/>
							<Route
								path="/history"
								element={<Conversations conversations={conversations} />}
							/>
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
