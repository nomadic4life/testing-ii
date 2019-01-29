import React from 'react';

const Display = ({ count }) => {
	const { balls, strikes, outs } = count;
	return (
		<div className="display" data-testid="display">
			<p data-testid="balls">{balls} balls</p>
			<p data-testid="strikes">{strikes} strikes</p>
			<p data-testid="outs">{outs} outs</p>
		</div>
	);
};

export default Display;
