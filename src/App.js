import React from 'react';
import Container from '@material-ui/core/Container';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Game from './components/Game';
import Home from './components/Home';
import './App.css';
import TitleBar from './components/TitleBar';
import NotFound from './components/404';

export default function App() {

  return (
    <Router>
      <TitleBar />
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={toGame} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}

function toGame() {
  return (
    <Game size="7" toDraw="6" />
  );
}
