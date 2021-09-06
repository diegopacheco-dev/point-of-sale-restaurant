import React from 'react'
import ButtonIcon from '../../01-atoms/Buttons/ButtonIcon/ButtonIcon'
import Heading from '../../01-atoms/Heading/Heading'
import Icon from '../../01-atoms/Icon/Icon'
import './styles.css'


const CustomerCard = ({name, action}) => {
    return (
        <div className="customer-card">
            <div>
            <Icon name="user" color="" size="sm" type="rounded"/>
            <Heading size="xs">{name}</Heading>
            </div>
            <ButtonIcon nameIcon="x" action="" sizeIcon="sm" action={() => alert("hola mundo")}/>
        </div>
    )
}

export default CustomerCard
