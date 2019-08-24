import React, { Component, Fragment } from 'react';

import { Field, reduxForm } from "redux-form";
import { Form } from "semantic-ui-react";

const renderTextArea = field => (
  <Form.TextArea
    {...field.input}
    label={field.label}
    placeholder={field.placeholder}
  />
);

class ContactForm extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit } = this.props;

    return (
      <div data-test="contactComponent">
        <Fragment>
          <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Field
                component={Form.Input}
                label="Name"
                name="Name"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Field
                component={Form.Input}
                label="Email"
                name="email"
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Field
                component={Form.Input}
                label="Phone"
                name="phone"
                placeholder="Enter your phone"
                data-test="phoneNumber"
              />
            </Form.Group>

            <Field
              component={renderTextArea}
              label="Message"
              name="message"
              placeholder="Tell us your message..."
            />

            <Form.Group inline>
              <Form.Button primary>Submit</Form.Button>
            </Form.Group>
          </Form>
        </Fragment>
      </div>
    );
  }
}

export default reduxForm({
  form: "profile"
})(ContactForm);
