import React from 'react'
import Button from './Button'

export default {
    title: "Atoms/Button",
    component: Button,
}

export const sm = () => <Button size="sm">Continuar</Button>
export const md = () => <Button>Continuar</Button>
export const lg = () => <Button size="lg">Continuar</Button>
export const secondary = () => <Button type="secondary" size="sm">Continuar</Button>