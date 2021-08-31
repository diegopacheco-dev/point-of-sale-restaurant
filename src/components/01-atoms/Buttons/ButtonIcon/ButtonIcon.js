import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const ButtonIcon = ({nameIcon="", type="primary", sizeIcon="md", action}) => {
    return (
        <div className={`button-icon ${type}`}
        onClick={() => action()}
        >
            <i class={`icon bx bx-${nameIcon} bx-${sizeIcon}`}></i>
        </div>
    )
}

export default ButtonIcon

ButtonIcon.propTypes = {
    nameIcon: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    sizeIcon: PropTypes.oneOf(['sm', 'md', 'lg'])
}