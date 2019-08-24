import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  historyPush = (push) => this.props.history.push(push);

  render() {
    const { children } = this.props
    const { fixed } = this.state
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container data-test="desktopComponent">
                <Menu.Item as='a' to="/" onClick={(event) => this.historyPush('/')} active={this.props.match.url === '/'}>
                  Home
                </Menu.Item>
                <Menu.Item as='a' to="/gallery" onClick={(event) => this.historyPush('/gallery')} active={this.props.match.url === '/gallery'}>Gallery</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item as='a' to="/contactus" data-test="contact" onClick={(event) => this.historyPush('/contact')} active={this.props.match.url === '/contact-us'}>Contact Us</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

Desktop.propTypes = {
  children: PropTypes.node,
}

export default Desktop;
