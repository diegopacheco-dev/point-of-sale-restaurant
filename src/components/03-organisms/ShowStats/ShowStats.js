import React from 'react'
import './styles.css'
import Heading from '../../01-atoms/Heading/Heading'
import StatsCard from '../../02-molecules/StatsCard/StatsCard'

const ShowStats = ({orders, charging}) => {
    return (
        <div className="show-stats vertical-space-1">
            <Heading size="lg">Pedidos</Heading>
            <div className="show-stats__container">
                <StatsCard title="Pedidos Totales"/>
                <StatsCard title="Monto Vendido"/>
                <StatsCard title="Por cobrar"/>
            </div>
        </div>
    )
}

export default ShowStats
