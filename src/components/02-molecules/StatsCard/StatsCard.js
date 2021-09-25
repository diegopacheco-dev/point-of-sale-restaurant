import React from 'react'
import './styles.css'
import Heading from '../../01-atoms/Heading/Heading'
import IconElement from '../../01-atoms/IconElement/IconElement'
import PropTypes from 'prop-types'


const StatsCard = ({number="2021", title="Stats", iconName="bar-chart-square", iconColor="green"}) => {
    return (
        <div className="stats-card">
            <div className="stats-card__info">
                <Heading>{number}</Heading>
                <Heading size="xxs" color="light">{title}</Heading>
            </div>

            <div>
                <IconElement name={iconName} color={iconColor}/>
            </div>
        </div>
    )
}

export default StatsCard

StatsCard.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    nameIcon: PropTypes.string.isRequired,
}