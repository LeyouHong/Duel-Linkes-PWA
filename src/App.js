import React, { Component } from 'react';
import Header from './components/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Home from './components/home'
import BackgroundImage  from './components/background';

class App extends Component {
  render() {
    return (
      <Paper style = { BackgroundImage }>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/home/" component={Home}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Paper>
    );
  }
}

export default App;
