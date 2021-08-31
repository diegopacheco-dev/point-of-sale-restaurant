import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Img = ({src, alt}) => {
    return (
        
            <img className="img" src={src} alt={alt} />
        
    )
}

export default Img

Img.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}