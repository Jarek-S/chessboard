import React from 'react';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const msg = {
    hints: "Rozwiązanie: ",
    history: "Twoje ruchy: ",
    trainingOn: "Włącz tryb treningowy (obowiązuje do końca gry)",
    hintsOn: "Pokaż rozwiązanie",
    historyOn: "Pokaż wykonane ruchy"
};

export default function ModeSwitcher(props) {

    return (
        <Grid container xs={12} direction="column" justify="space-around" className="mode-switcher">
            <Grid item>
                <FormControlLabel
                    control={<Switch checked={props.trainingOn} disabled={props.trainingOn} onChange={props.handleTrainingChange} />}
                    label={msg.trainingOn}
                />
            </Grid>
            <Grid item>
                <Collapse in={props.trainingOn}>
                    <FormControlLabel
                        control={<Switch checked={props.hintsOn} onChange={props.handleHintsChange} />}
                        label={msg.hintsOn}
                    />
                    <Collapse in={props.hintsOn}>
                        <Typography>{msg.hints}{props.hints}</Typography>
                    </Collapse>
                    <FormControlLabel
                        control={<Switch checked={props.historyOn} onChange={props.handleHistoryChange} />}
                        label={msg.historyOn}
                    />
                    <Collapse in={props.historyOn}>
                        <Typography>{msg.history}{props.history}</Typography>
                    </Collapse>
                </Collapse>
            </Grid>
        </Grid>
    );
}