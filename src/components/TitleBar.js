import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  topBar: {
    marginBottom: '1.7rem'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  icon: {
    fontSize: '1.7rem'
  }
}));

export default function TitleBar() {

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.topBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <IconButton edge="start" className={classes.icon} color="inherit" component={Link} to="/">
              <HomeIcon />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h5" className={classes.title}>
              Szachownica
      </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}