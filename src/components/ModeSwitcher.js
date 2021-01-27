import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 180,
    },
    container: {
        display: 'flex'
    },
    paper: {
        margin: theme.spacing(1)
    }
}));

const msg = {
    hints: "Rozwiązanie: ",
    history: "Twoje ruchy: ",
    trainingOn: "Włącz tryb treningowy (obowiązuje do końca gry)",
    hintsOn: "Pokaż rozwiązanie",
    historyOn: "Pokaż wykonane ruchy"
};

export default function ModeSwitcher(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormControlLabel
                control={<Switch checked={props.trainingOn} disabled={props.trainingOn} onChange={props.handleTrainingChange} />}
                label={msg.trainingOn}
            />
            <div className={classes.container}>
                <Collapse in={props.trainingOn}>
                    <FormControlLabel
                        control={<Switch checked={props.hintsOn} onChange={props.handleHintsChange} />}
                        label={msg.hintsOn}
                    />
                    <Collapse in={props.hintsOn}>
                        <div>{msg.hints}{props.hints}</div>
                    </Collapse>
                    <FormControlLabel
                        control={<Switch checked={props.historyOn} onChange={props.handleHistoryChange} />}
                        label={msg.historyOn}
                    />
                    <Collapse in={props.historyOn}>
                        <div>{msg.history}{props.history}</div>
                    </Collapse>
                </Collapse>
            </div>
        </div>
    );
}