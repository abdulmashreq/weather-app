import React, { Component } from 'react';

import Footer from '../components/Footer'
import Header from '../components/Header'
import CityCard from '../components/CityCard'
import { Responsive } from 'semantic-ui-react'

class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="App">
        <Header mobile={Responsive.onlyMobile.maxWidth} {...this.props}>
          <CityCard {...this.props} />
          <Footer />
        </Header>
      </div>
    );
  }
}

export default HomePage;
