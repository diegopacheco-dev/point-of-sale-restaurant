import React from 'react'
import ButtonIcon from './ButtonIcon'

export default {
    title: "Atoms/ButtonIcon",
    component: ButtonIcon
}


export const primary = () => <ButtonIcon nameIcon="plus-circle" sizeIcon="md" action={()=> alert("hola mundo")} />

export const secondary = () => <ButtonIcon type="secondary" nameIcon="chevron-down" sizeIcon="sm" action={()=> alert("hola mundo")} />

