import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Heading = ({children, size="base"}) => {
    return (
        <p className={`heading ${size}`}>{children}</p>
    )
}

export default Heading

Heading.propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.string,
}

