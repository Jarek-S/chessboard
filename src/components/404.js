import Baner from "./Baner";
import logo from '../assets/logo60.png';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function NotFound() {
    return (
        <Grid container={true} direction="column" justify="center" alignItems="center" spacing={4}>
            <Grid item xs={12}>
                <img className="rotate" src={logo} alt="" />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" align="center">
                    Tu jest tylko zrzutka dla #bohaterskaInga :)
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Baner />
            </Grid>
        </Grid>
    );
}