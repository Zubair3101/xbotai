import React, { useEffect, useState } from "react";
import './App.css';
import ChatInterface from "./components/ChatInterface";
import Sidebar from "./components/Sidebar";
import Conversations from "./components/Conversations";
import Navbar from "./components/Navbar";
import data from "./sampleData.json";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [aiData, setAiData] = useState([]);
	const [conversations, setConversations] = useState([]);
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState('');
	const [response, setResponse] = useState('');

	useEffect(() => {
		setAiData(data);
		const saved = localStorage.getItem("conversations");
		if (saved) setConversations(JSON.parse(saved));
	}, []);

	useEffect(() => {
		let res = aiData.filter((x) => x.question.includes(input));
		if (res.length === 0) {
			setResponse("Sorry, Did not understand your query!");
		} else {
			setResponse(res[0].response);
		}
	}, [input]);

	const updateMessages = (newMessage) => setMessages(prev => [...prev, newMessage]);

	const updateConversations = () => {
		const updated = [...conversations, messages];
		setConversations(updated);
		localStorage.setItem("conversations", JSON.stringify(updated));
	};

	const handleSaveClick = () => {
		updateConversations();
	};

	const updateInput = (value) => setInput(value);

	return (
		<Router>
			<div className="App">
				<div className="grid-container">
					<div className="sidebar-section">
						<Sidebar />
					</div>
					<div className="main-section">
						<Navbar />
						<Routes>
							<Route
								path="/"
								element={
									<ChatInterface
										messages={messages}
										updateMessages={updateMessages}
										handleSaveClick={handleSaveClick}
										input={input}
										updateInput={updateInput}
										response={response}
									/>
								}
							/>
							<Route path="/history" element={<Conversations conversations={conversations} />} />
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
