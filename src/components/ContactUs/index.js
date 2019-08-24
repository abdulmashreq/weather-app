import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Divider, Header, Message } from "semantic-ui-react";

import ContactForm from "./ContactForm";

class ContactUs extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      name: ''
    }
  }
  handleSubmit = (props) => {
    this.setState({
      ...this.state,
      flag: false,
      name: props.Name
    })
    console.log('Form successfully submited.')
  }

  render() {
    return (
      <Container style={{ minHeight: 550, padding: '1em 0em' }}>
        <Divider hidden />
        <Header as="h1" dividing>
          Contact Us
        </Header>
        {
          this.state.flag === false ?
          <Message success>
            <p>Thank you <b>{this.state.name}</b> for contacting us. We will assist you soon.</p>
          </Message> :
          ''
        }
        <Container>
          {
            this.state.flag ?
            <ContactForm onSubmit={this.handleSubmit.bind(this)} {...this.props} /> :
            ''
          }
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return state.form.profile
    ? {
        values: state.form.profile.values,
        submitSucceeded: state.form.profile.submitSucceeded
      }
    : {};
};

export default connect(mapStateToProps)(ContactUs);
