import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/logo60.png';
import Baner from './Baner';

class Home extends React.Component {

    render() {
        return (
            <Grid container={true} direction="column" alignItems="center" spacing={3}>
                <Grid item xs={12}>
                    <img className="rotate" src={logo} alt="" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">
                        Szachownica
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        Celem zabawy jest ułożenie rozsypanej szachownicy. W wersji najłatwiejszej da się to zrobić w&nbsp;sześciu ruchach, na średnim poziomie trudności –&nbsp;w&nbsp;ośmiu, na najwyższym –&nbsp;w&nbsp;dziesięciu.
                    </Typography>
                    <Typography>
                        Ruch wykonuje się klikając w wybrane pole. Powoduje to zmianę jego koloru – ale także kolorów pól sąsiadujących z nim w poziomie i w pionie.
                    </Typography>
                    <Typography>
                        Jeśli zabawa Ci się spodoba, możesz w podziękowaniu dla autora dorzucić się do zbiórki na leczenie pięciomiesięcznej Ingi, która potrzebuje najdroższego leku na świecie. Oczywiście możesz się dorzucić także jeśli łamigłówka Ci się nie spodoba. To Ty decydujesz.
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Button
                        color="primary"
                        variant="contained"
                        component={Link}
                        to="/game">Spróbuj
                    </Button>
                </Grid>
                <Grid>
                    <Baner />
                </Grid>
            </Grid>
        );
    }
}

export default Home;