import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Divider, Header, Message } from "semantic-ui-react";
import EmailSimulate from "./EmailSimulate";
import ContactForm from "./ContactForm";

class ContactUs extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      submission: {}
    }
  }
  handleSubmit = (props) => {
    this.setState({
      ...this.state,
      flag: false,
      submission: props
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
          <div>
            <Message success>
              <p>Thank you <b>{this.state.submission.Name}</b> for contacting us. We will assist you soon.</p>
            </Message>
            <EmailSimulate {...this.state.submission} />
          </div>
           :
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
