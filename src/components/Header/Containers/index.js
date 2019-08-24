import PropTypes from 'prop-types'
import React from 'react';
import Desktop from './Desktop'
import Mobile from './Mobile'

const Containers = (props) => (
  <div>
    <Desktop {...props}></Desktop>
    <Mobile {...props}></Mobile>
  </div>
)

Containers.propTypes = {
  children: PropTypes.node,
}

export default Containers;
