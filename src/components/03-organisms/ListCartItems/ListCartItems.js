import React from 'react'
import './styles.css'
import CartArticle from '../../02-molecules/CartArticle/CartArticle'

const ListCartItems = (items=[]) => {
    return (
        <div className="list-cart-items">
            <CartArticle />
                <CartArticle />
                <CartArticle />
                <CartArticle />
                <CartArticle />
                <CartArticle />
                <CartArticle />
                <CartArticle />
                <CartArticle />
                <CartArticle />
                <CartArticle />
                <CartArticle />
                <CartArticle />
        </div>
    )
}

export default ListCartItems
