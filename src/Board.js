import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';
import './Cell.css';

class Board extends Component {

	static defaultProps = {
		BOARD_SIZE: 8
	}

	constructor(props) {
		super(props);

		this.state = {
			board: this.createBoard(),
			isComplete: false
		}
	}

	createBoard() {
		let board = [];

		for (let i = 0; i < this.props.BOARD_SIZE; i++) {
			let row = [];
			board.push(row);
		}

		return board;
	}

	makeTable() {
		let table = [];
		let flag = true;
		for (let i = 0; i < this.props.BOARD_SIZE; i++) {
			let row = [];
			// flag variable is used to determine whether or not to shade in the cell for styling purposes
			for (let j = 0; j < this.props.BOARD_SIZE; j++) {
				// coordinate = x, y
				let coordinate = `${j},${i}`;
				row.push(
					<Cell 
						key={coordinate}
						isQueen={this.state.board[i][j]}
						isFilledIn={flag}
					/>
				)
				flag = !flag;
			}
			table.push(<tr className="Board-row" key={i}>{row}</tr>)
			flag = !flag;
		}

		return (
			<table className="Board">
				<tbody>{table}</tbody>
			</table>
		)
	}

	render() {
		return(
			<div>
				<h1>N-Queens Visualizer</h1>
				{this.makeTable()}
			</div>
		)
	}
}

export default Board;