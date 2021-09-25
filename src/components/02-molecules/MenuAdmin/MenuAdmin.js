import { Icon } from '@material-ui/core'
import React from 'react'
import Heading from '../../01-atoms/Heading/Heading'
import IconElement from '../../01-atoms/IconElement/IconElement'
import './styles.css'

const MenuAdmin = () => {
    return (
        <div className="menu-admin">
            <div> 
                <IconElement name="store-alt"/>
                <Heading>Administrar Productos</Heading>
            </div>

            <div>
                <IconElement name="lock"/>
                <Heading>Seguridad</Heading>
            </div>
            
        </div>
    )
}

export default MenuAdmin
