import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin'
import logo from './logo.svg';
import './App.css';
import Root from './routes/Route.js'
import appTheme from './components/Apptheme'

injectTapEventPlugin()
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme(appTheme)}>
        <Root/>
      </MuiThemeProvider>
    );
  }
}

export default App;
