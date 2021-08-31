import React from 'react'
import ButtonIcon from '../../01-atoms/Buttons/ButtonIcon/ButtonIcon'
import List from '../../02-molecules/List/List'
import './styles.css'

const SearchAndAddCustomer = () => {
    return (
        <div className={`search-and-add-customer`}>
            <i className={`icon bx bx-search bx-sm`}></i>
            <input type="text" placeholder="Buscar cliente"/>
            <ButtonIcon nameIcon="plus-circle" action={() => alert("hola mundo")}/>
            <List />
        </div>
    )
}

export default SearchAndAddCustomer
