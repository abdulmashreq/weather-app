import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import HomePage from '../containers/HomePage';
import WeatherPage from '../containers/WeatherPage';
import GalleryPage from '../containers/GalleryPage';
import ContactPage from '../containers/ContactPage';
import store from '../redux';
import 'semantic-ui-css/semantic.min.css'
const createHistory = require("history").createBrowserHistory;

const history = createHistory();

class Routes extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/weather/:city" component={WeatherPage} />
            <Route path="/gallery" component={GalleryPage} />
            <Route path="/contact" component={ContactPage} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Routes;
