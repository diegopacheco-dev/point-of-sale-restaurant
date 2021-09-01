import React from 'react'
import ButtonWithIcon from '../../01-atoms/Buttons/ButtonWithIcon/ButtonWithIcon'
import './styles.css'
import PropTypes from 'prop-types'

const Categories = ({categories=[], action}) => {
    action = () => alert("hola")

    categories = [
        {
            name: "Drinks",
            id: "jasñlkdfj",
            boxIconName: "drink"
        },
        {
            name: "Postres",
            id: "añslkdfj23",
            boxIconName: "cake"
        },
        {
            name: "Platos",
            id: "añslkdjñdlfkfj23",
            boxIconName: "dish"
        }
    ]

    return (
        <div className="categories-container">
            {
                categories.map(cat => <ButtonWithIcon
                    key={cat.id} 
                    type="categoria"
                    onClick={() => action()}
                    id={cat.id}
                    idSelected="añslkdfj23"
                    nameIcon={cat.boxIconName}
                    sizeIcon= "md"
                >{cat.name}</ButtonWithIcon>)
            }
        </div>
        
    )
}

export default Categories

Categories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        boxIconName: PropTypes.string.isRequired
    }))
}

