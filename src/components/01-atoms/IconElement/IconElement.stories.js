import React from 'react';
import IconElement from './IconElement';

export default {
    title: "Atoms/IconElement",
    component: IconElement
}

export const small = () => <IconElement name="plus" color="green" size="sm" />
export const medium = () => <IconElement name="plus" color="red" size="md" />
export const large = () => <IconElement name="plus" color="green" size="lg" />