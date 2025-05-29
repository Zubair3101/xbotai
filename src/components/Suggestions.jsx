import React from 'react';
import './Suggestions.css';

const options = [
  "Hi, what is the weather",
  "Hi, what is my location",
  "Hi, what is the temperature",
  "Hi, how are you"
];

export default function Suggestions() {
	return (
		<div className="suggestions-grid">
			{options.map((option, index) => (
				<div className="suggestion-card" key={index}>
					<div className="suggestion-content">
						<h3 className="suggestion-title">{option}</h3>
						<p className="suggestion-subtitle">Get immediate AI generated response</p>
					</div>
				</div>
			))}
		</div>
	);
}
