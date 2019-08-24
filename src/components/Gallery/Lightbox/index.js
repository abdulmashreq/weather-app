import React, { PureComponent, Fragment } from 'react'
import './style.css'

import {
    Dimmer,
    Icon,
    Image,
    Button
} from 'semantic-ui-react'

class Lightbox extends PureComponent {

    state = {
        activeImage: 0
    }
    handleThumbnailClick = index => this.setState({ activeImage: index })

    handleNavigateLeft = () => {
        this.setState(prevState => {
            if (prevState.activeImage > 0) {
                return { activeImage: prevState.activeImage - 1}
            }
        })
    }

    handleNavigateRight = () => {
        this.setState(prevState => {
            if (prevState.activeImage < this.props.images.length - 1) {
                return { activeImage: prevState.activeImage + 1}
            }
        })
    }

    handleKeyDown = ({keyCode}) => {
        if (keyCode === 27) this.props.onClose()
        if (this.props.keyboardNavigation !== false) {
            if (keyCode === 37 || keyCode === 38) this.handleNavigateLeft()
            if (keyCode === 39 || keyCode === 40) this.handleNavigateRight()
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    render() {
        const { active, images, onClickOutside, onClose } = this.props
        let { activeImage } = this.state
        if (images.length >= 1) {
            let thumbnails = images.map((image, index) => {
                return { src: image.src, key: index }
            })

            let highlight = activeImage

            if (thumbnails.length > 5) {
                if (activeImage > 2) {
                    thumbnails = thumbnails.slice(activeImage - 2, activeImage + 3)
                    highlight = 2
                } else {
                    thumbnails = thumbnails.slice(0, 5)
                }
            }

            return (
                <Fragment>
                    <Dimmer
                        page
                        active={active}
                        onClickOutside={onClickOutside}
                    >
                        <div className='inner'>
                            <Button
                                className='close'
                                onClick={onClose}
                                icon='close'
                                basic
                                inverted
                            />
                            <div className='leftGutter'>
                                <Button
                                    onClick={this.handleNavigateLeft}
                                    disabled={activeImage === 0}
                                    basic
                                    size='huge'
                                    circular
                                    icon
                                    inverted
                                >
                                    <Icon name='arrow left' />
                                </Button>
                            </div>
                            <div className='activeImage'>
                                <Image src={images[activeImage].src} />
                            </div>
                            <div className='rightGutter'>
                                <Button
                                    onClick={this.handleNavigateRight}
                                    disabled={activeImage === images.length - 1}
                                    size='huge'
                                    basic
                                    circular
                                    icon
                                    inverted
                                >
                                    <Icon name='arrow right' />
                                </Button>
                            </div>
                            <div className='detail'>
                                <span>{`${activeImage + 1} of ${images.length}`}</span>
                            </div>
                            <div className='carousel'>
                                <div className='carousel__inner'>
                                    {
                                        thumbnails.map((thumbnail, index) => {
                                            return (
                                                <img
                                                    key={thumbnail.key}
                                                    src={thumbnail.src}
                                                    alt="img"
                                                    className={index === highlight ? 'carousel__activeImage' : 'carousel__image' }
                                                    onClick={() => { this.handleThumbnailClick(thumbnail.key) }}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </Dimmer>
                </Fragment>
            )
        }

        return null
    }
}

export default Lightbox
