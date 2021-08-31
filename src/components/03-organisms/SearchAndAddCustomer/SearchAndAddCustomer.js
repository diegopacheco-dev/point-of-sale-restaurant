import React from 'react'
import List from '../../02-molecules/List/List'
import './styles.css'

const SearchAndAddCustomer = () => {
    return (
        <div className={`search-and-add-customer`}>
            <i className={`icon bx bx-search bx-sm`}></i>
            <input type="text" placeholder="Buscar cliente"/>
            <i className={`icon bx bx-plus-circle bx-md`}></i>
            <List />
        </div>
    )
}

export default SearchAndAddCustomer
