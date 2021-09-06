import React from 'react'
import Heading from '../../01-atoms/Heading/Heading'
import Categories from '../../02-molecules/Categories/Categories'

const ChooseCategory = () => {
    return (
        <div className="vertical-space-1">
            <Heading>Elige la categoría</Heading>
            <Categories />
        </div>
    )
}

export default ChooseCategory
