import React, { Component } from 'react';

import Footer from '../components/Footer'
import Header from '../components/Header'
import WeatherCard from '../components/WeatherCard'
import { Responsive } from 'semantic-ui-react'

class WeatherPage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="App">
        <Header mobile={Responsive.onlyMobile.maxWidth} {...this.props}>
          <WeatherCard city={this.props.match.params.city} />
          <Footer />
        </Header>
      </div>
    );
  }
}

export default WeatherPage;
