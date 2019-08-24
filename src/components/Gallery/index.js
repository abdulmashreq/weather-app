import React, { PureComponent } from 'react'
import Lightbox from './Lightbox'
import Thumbnail from './Thumbnail'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./style.css";

import {
    Container,
    Header,
    Divider
  } from 'semantic-ui-react'

  import {
    galleryData
  } from '../../redux/actions';

  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(Object.assign({}, galleryData), dispatch),
  });

class Gallery extends PureComponent {
    state = {
        active: false,
        images: [
            { src: 'https://react.semantic-ui.com/images/wireframe/image.png' },
        ]
    }

    handleClose = () => {
      this.props.galleryOpen({});
    }

    componentDidMount() {
      this.props.galleryDataStart({});
    }

    componentDidUpdate() {
      this.setState({
        ...this.state,
        active: this.props.galleryData.active,
        images: this.props.galleryData.data ? this.props.galleryData.data : this.state.images,
      })
    }
    render() {
        const {
            active,
            images
        } = this.state

        return (
            <div data-test="galleryComponent">
              <Divider hidden/>
              <Header as='h3' content='Gallery Images' className='h3' textAlign='center' />
              <Container style={{ minHeight: 450, padding: '1em 0em' }}>
                  <Thumbnail {...this.props}  data-test="thumbnail"/>
                  <Lightbox
                      active={active}
                      onClickOutside={this.handleClose}
                      onClose={this.handleClose}
                      keyboardNavigation={false}
                      images={images}
                      data-test="lightbox" 
                  />
              </Container>
              <Divider hidden/>
            </div>
        )
    }
}

Gallery.propTypes = {
  galleryData: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

function mapStateToProps(state) {
  return {
    galleryData: state.gallery,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
