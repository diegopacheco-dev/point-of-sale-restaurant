import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Heading = ({children, size="md", color="", align="", className}) => {
    return (
        <p className={`heading ${size} ${color} ${align} ${className}`}>{children}</p>
    )
}

export default Heading

Heading.propTypes = {
    children: PropTypes.any.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
}

