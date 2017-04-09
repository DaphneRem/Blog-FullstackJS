import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';

import {teal200} from 'material-ui/styles/colors';


// pour que MaterialUI fonctionne correctement
injectTapEventPlugin();

filepicker.setKey("Avfp07uMpSAGjq6foUFjtz");


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal200,
  }
});



ReactDom.render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory} routes={routes} />
</MuiThemeProvider>), document.getElementById('content'));
