import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
	render() {
		return(
			<div className={`${this.props.isFilledIn ? "Cell" : "Cell Cell-dark"}`}>
				Q
			</div>
		)
	}
}

export default Cell;