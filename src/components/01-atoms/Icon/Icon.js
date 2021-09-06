import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

const Icon = ({name, color="", size="md", type=""}) => {
    return (
            <i className={`icon-atom bx bx-${name} ${color} ${size} ${type}`}></i>
    )
}

export default Icon

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string
}
