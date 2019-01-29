import React from 'react';
import Display from './Display';

class Dashboard extends React.Component {
	state = {
		strikes: 0,
		balls: 0,
		outs: 0
	};

	ball = () => {
		const count = { ...this.state };
		const balls = (count.balls += 1);
		if (balls >= 4) {
			this.setState({ balls: 0, strikes: 0 });
		} else {
			this.setState({ balls });
		}
	};

	strike = () => {
		const count = { ...this.state };
		const strikes = (count.strikes += 1);
		let outs = count.outs;
		if (strikes >= 3) {
			outs += 1;
			outs > 2
				? this.setState({ balls: 0, outs: 0, strikes: 0 })
				: this.setState({ balls: 0, strikes: 0, outs });
		} else {
			this.setState({ strikes: strikes });
		}
	};

	hit = () => {
		this.setState({ balls: 0, strikes: 0 });
	};

	foul = () => {
		const count = { ...this.state };
		let strikes = count.strikes;
		if (strikes === 2) {
			return;
		} else {
			strikes += 1;
			this.setState({ strikes });
		}
	};

	render() {
		// const { strikes, balls } = this.state;
		return (
			<div className="dashboard">
				<Display count={this.state} />

				<button onClick={this.strike}>Add Strike</button>
				<button onClick={this.ball}>Add Ball</button>
				<button onClick={this.hit}>Hit</button>
				<button onClick={this.foul}>Foul Ball</button>
			</div>
		);
	}
}

export default Dashboard;
