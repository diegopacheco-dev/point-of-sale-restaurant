import React from 'react';
import Icon from './Icon';

export default {
    title: "Atoms/Icon",
    component: Icon
}

export const small = () => <Icon name="plus" color="green" size="sm" />
export const medium = () => <Icon name="plus" color="red" size="md" />
export const large = () => <Icon name="plus" color="green" size="lg" />