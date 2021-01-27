import React from 'react';
import Square from './Square'

class Board extends React.Component {

  renderSquare(i) {
    return (<Square
      key={i}
      color={this.props.layout[i].color}
      onClick={() => this.props.onClick(i)}
      training={this.props.training}
      number={i + 1}
    />);
  }

  createBoard(a) {
    let board = [];

    for (let i = 0; i < a; i++) {
      let rows = [];
      for (let j = 0; j < a; j++) {
        rows.push(this.renderSquare(i * a + j));
      }
      board.push(<div key={i} className="board-row">{rows}</div>);
    }
    return board;
  }

  render() {
    let a = this.props.size;
    return (
      <div>
        {this.createBoard(a)}
      </div>
    );
  }
}

export default Board;