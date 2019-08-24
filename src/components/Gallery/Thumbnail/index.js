import React, { PureComponent } from 'react'
import { Image } from 'semantic-ui-react'
import './style.css'

class Thumbnail extends PureComponent {
    state = {
        images: [
            { src: 'https://react.semantic-ui.com/images/wireframe/image.png' },
        ]
    }

    handleOpen(index) {
      this.props.galleryOpen({index: index});
    }

    componentDidUpdate() {
      this.setState({
        ...this.state.images,
        images: this.props.galleryData.data ? this.props.galleryData.data : this.state.images
      })
    }
    render() {
      let images = this.state.images;
      let thumb = 'Loading...';
      if(images) {
        thumb = images.map((val, index) =>
         <Image key={index} onClick={this.handleOpen.bind(this, index)} src={val.src} />
       )
      }
      return (
            <div>
              <Image.Group size='small'>
                {thumb}
              </Image.Group>
            </div>
      )
    }
}

export default Thumbnail;
