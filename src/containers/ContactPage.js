import React, { Component } from 'react';

import Footer from '../components/Footer'
import Header from '../components/Header'
import ContactUs from '../components/ContactUs'
import { Responsive } from 'semantic-ui-react'

class GalleryPage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="App">
        <Header mobile={Responsive.onlyMobile.maxWidth} {...this.props}>
          <ContactUs {...this.props}/>
          <Footer />
        </Header>
      </div>
    );
  }
}

export default GalleryPage;
