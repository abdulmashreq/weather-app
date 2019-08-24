import React from 'react';
import { Segment } from 'semantic-ui-react';

const EmailSimulate = (props) => (
  <Segment.Group>
    <Segment bold>Email Simulator</Segment>
    <Segment.Group>
      <Segment>From:  contact@pelmorex.com</Segment>
      <Segment>To: {props.email}</Segment>
      <Segment>Name: {props.Name}</Segment>
      <Segment>Phone: {props.phone}</Segment>
      <Segment>Message: {props.message}</Segment>
    </Segment.Group>
  </Segment.Group>
)

export default EmailSimulate;
