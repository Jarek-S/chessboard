import React from "react";
import { Box, Button, Collapse, Grid, Typography } from "@material-ui/core";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { areBoardsEqual, getMfromN, getSquares, revertColor } from "../utils/service";
import Board from "./Board";
import ResultModal from "./ResultModal";
import ModeSwitcher from "./ModeSwitcher";

class Game extends React.Component {
  msg = {
    sol: "Rozwiązanie: ",
    status: "Liczba wykonanych ruchów: ",
    levEasy: "Łatwy",
    levMid: "Średni",
    levHard: "Trudny"
  }

  constructor(props) {
    super(props);
    this.state = this.initState();
  }

  initState(levelId = 0) {
    const level = this.getLevel(parseInt(levelId));
    const levelName = this.getLevelName(parseInt(levelId));
    return {
      levelId: levelId,
      levelName: levelName,
      layout: getSquares(level.size),
      board: getSquares(level.size),
      movesCount: 0,
      size: level.size,
      draw: level.draw,
      play: false,
      win: false,
      drawn: [],
      trainingMode: false,
      showHints: false,
      showHistory: false,
      history: []
    }
  }

  getLevel(levelId) {
    let size = parseInt(this.props.size);
    let draw = parseInt(this.props.toDraw);
    if (levelId) {
      size = size - levelId;
      draw = draw + 2 * levelId;
    }
    return { size: size, draw: draw }
  }

  startPlay(m, a) {
    this.resetLayout();
    const drawn = getMfromN(m, a * a);
    this.setState({
      drawn: drawn,
      movesCount: 0,
      play: true
    });
    let n = 1;
    for (let i of drawn) {
      setTimeout(() => {
        this.setNewLayout(i);
      }, 40 * n);
      n++;
    }
  }

  handleSquareClick(i) {
    if (this.state.play) {
      let history = this.getUpdatedHistory(i);
      this.increaseCounter();
      this.setNewLayout(i);
      this.setState({
        history: history
      })
      let eq = areBoardsEqual(this.state.layout, this.state.board);
      if (eq) {
        this.setState({
          play: false,
          win: true
        });
      }
    }
  }

  increaseCounter() {
    this.setState({
      movesCount: this.state.movesCount + 1,
    });
  }

  setNewLayout(i) {
    let squares = this.state.layout.slice();
    const affected = [i].concat(this.state.layout[i].neighbours);
    this.setState({
      layout: this.revertAffected(squares, affected)
    });
  }

  revertAffected(squares, affected) {
    for (let i of affected) {
      const color = squares[i].color;
      squares[i].color = revertColor(color);
    }
    return squares;
  }

  setLevel(event) {
    this.setState(this.initState(event.target.value));
  }

  resetLayout() {
    const level = this.state.levelId;
    this.setState(this.initState(level));
  }

  modalClose() {
    this.setState({
      movesCount: 0,
      win: false,
      trainingMode: false
    });
  }

  handleModeChange(value) {
    this.setState({ trainingMode: value });
  }

  handleHintsChange(value) {
    this.setState({ showHints: value });
  }

  handleHistoryChange(value) {
    this.setState({ showHistory: value });
  }

  getUpdatedHistory(item) {
    const number = parseInt(item) + 1;
    return Array.from(this.state.history).concat(number);
  }

  getLevelName(levelId) {
    let name = this.msg.levEasy;
    switch (levelId) {
      case 1:
        name = this.msg.levMid;
        break;
      case 2:
        name = this.msg.levHard;
        break;
      default:
    }
    return name.toLowerCase();
  }

  render() {
    const hints = this.state.drawn;
    const naturals = hints.map(e => e + 1);
    const history = Array.from(this.state.history);
    return (
      <Grid className="game" container={true} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h5">{this.msg.status}{this.state.movesCount}</Typography>
        </Grid>
        <Box className="board-box">
          <Grid item className="game-board">
            <Board size={this.state.size} layout={this.state.layout} onClick={(i) => this.handleSquareClick(i)} training={this.state.trainingMode} />
          </Grid>
        </Box>
        <Grid container justify="space-evenly" alignContent="center" alignItems="center">
          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => this.startPlay(this.state.draw, this.state.size)}>
              Nowa gra
            </Button>
          </Grid>
          <Grid item>
            <FormControl className="{classes.formControl}">
              <NativeSelect
                defaultValue={0}
                inputProps={{
                  id: 'board-size',
                  onChange: (e) => this.setLevel(e)
                }}
              >
                <option value={0}>{this.msg.levEasy}</option>
                <option value={1}>{this.msg.levMid}</option>
                <option value={2}>{this.msg.levHard}</option>
              </NativeSelect>
              <FormHelperText>Poziom trudności</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} justify="flex-start">
          <Collapse in={this.state.play}>
            <ModeSwitcher
              handleTrainingChange={() => this.handleModeChange(true)}
              handleHintsChange={() => this.handleHintsChange(!this.state.showHints)}
              handleHistoryChange={() => this.handleHistoryChange(!this.state.showHistory)}
              trainingOn={this.state.trainingMode}
              hintsOn={this.state.showHints}
              historyOn={this.state.showHistory}
              hints={naturals.join(", ")}
              history={history.join(", ")} />
          </Collapse>
        </Grid>
        <ResultModal
          open={this.state.win}
          close={() => this.modalClose()}
          training={this.state.trainingMode}
          level={this.state.levelName}
          moves={this.state.movesCount} />
      </Grid>
    );
  }
}

export default Game;
