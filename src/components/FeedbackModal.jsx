import React from 'react';
import './FeedbackModal.css';

export default function FeedbackModal(props) {
	if (!props.open) return null;

	return (
		<div className="modal-overlay" onClick={props.handleClose}>
			<div className="modal-box" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					<div className="modal-title">
						<span className="modal-icon">💡</span>
						<h3>Provide Additional Feedback</h3>
					</div>
					<button className="modal-close" onClick={props.handleClose}>×</button>
				</div>
				<textarea
					className="modal-textarea"
					rows="4"
					placeholder="Enter your feedback here..."
				></textarea>
				<div className="modal-actions">
					<button className="submit-button" onClick={props.handleClose}>Submit</button>
				</div>
			</div>
		</div>
	);
}
