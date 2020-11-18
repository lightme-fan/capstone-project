import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types'
import { Context } from './useContext'

function Image({ className, photo }) {
    const [isHovered, setHovered] = useState(false)
    const { toggleFavorite, cartItems, addToCart, removeFromCart } = useContext(Context)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    function handleFavorite() {
        if (photo.isFavorite) {
            return <i onClick={() => toggleFavorite(photo.id)} className="ri-heart-fill favorite"></i>
        } else if (isHovered) {
            return <i onClick={() => toggleFavorite(photo.id)} className = 'ri-heart-line favorite'></i>
        }
    }

    function cartIcon() {
        console.log('Added photo');
        const alreadyInCart = cartItems.some(cartItem => cartItem.id ===photo.id)
        
        if(alreadyInCart) {
            return <i onClick={() => removeFromCart(photo.id)} className="ri-shopping-cart-fill cart"></i>
        } else if (isHovered) {
            return <i onClick={() => addToCart(photo)} className = "ri-add-circle-line cart"> </i>
        } 
    }

    return ( 
        <div className = { `${className} image-container` }
        onMouseEnter = { handleMouseEnter }
        onMouseLeave = { handleMouseLeave } 
        > 
            {handleFavorite()} {cartIcon()}
            <img src={ photo.url } className = 'image-grid' />
        </div>
    );
}

Image.propTypes ={
    className: PropTypes.string,
    photo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image;