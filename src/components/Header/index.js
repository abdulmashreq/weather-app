import React from 'react';
import Containers from './Containers'
import './style.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div data-test="headerComponent">
        <Containers {...this.props}></Containers>
      </div>
    );
  }
}

export default Header;
