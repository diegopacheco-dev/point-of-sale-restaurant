import React from 'react'
import Heading from './Heading'

export default {
    title: 'Atoms/Heading',
    component: Heading
}

export const xs = () => <Heading size="xs">Titulo</Heading>
export const sm = () => <Heading size="sm">Titulo</Heading>
export const defaultSize = () => <Heading>Titulo</Heading>
export const lg = () => <Heading size="lg">Titulo</Heading>