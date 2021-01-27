import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Baner from './Baner';

export default class ResultModal extends React.Component {

    msg = {
        mode: "Tryb: ",
        training: "treningowy",
        normal: "normalny",
        level: "Poziom trudności: ",
        moves: "Liczba ruchów: ",
        close: "Zamknij"
    }

    constructor(props) {
        super(props);
        this.state = { show: props.open };
    }

    getModeName() {
        return this.props.training ? this.msg.training : this.msg.normal;
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Szachownica ułożona!"}</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText id="alert-dialog-description">
                        {this.msg.mode}{this.getModeName()}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        {this.msg.level}{this.props.level}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        {this.msg.moves}{this.props.moves}
                    </DialogContentText>
                </DialogContent>
                <DialogContent dividers>
                    <Baner />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.close} color="primary" variant="contained" autoFocus>
                        {this.msg.close}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };
}