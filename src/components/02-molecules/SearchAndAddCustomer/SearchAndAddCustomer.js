import React from 'react'
import './styles.css'

const SearchAndAddCustomer = () => {
    return (
        <div className={`search-and-add-customer`}>
            <i className={`icon bx bx-search bx-sm`}></i>
            <input type="text" placeholder="Buscar cliente"/>
            <i className={`icon bx bx-plus-circle bx-md`}></i>
        </div>
    )
}

export default SearchAndAddCustomer
