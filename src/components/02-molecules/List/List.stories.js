import React from 'react'
import List from './List'

export default {
    title: "Molecules/List",
    component: List
}

const clientes = [{name:"diego"}, {name:"erick"}, {name:"loan"}, {name:"mateo"}]
const saludar = () => alert("hola mundo")

export const base = () => <List clientes={clientes} action={saludar}/>