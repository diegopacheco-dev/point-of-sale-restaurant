import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

const Button = ({children, size="md", type="primary"}) => {
    return (
    <button className={`button ${size} ${type}`}>
        {children}
    </button>
    )
}

export default Button

Button.propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary']),
}
