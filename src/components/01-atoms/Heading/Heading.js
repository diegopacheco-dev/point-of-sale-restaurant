import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Heading = ({children, size="md", color=""}) => {
    return (
        <p className={`heading ${size} ${color}`}>{children}</p>
    )
}

export default Heading

Heading.propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
}

