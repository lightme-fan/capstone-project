import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Context} from './useContext'

function Header() {
	const { toggleFavorite, cartItems, addToCart, removeFromCart } = useContext(Context)

		const cartClassName = cartItems.length > 0 ?
			"ri-shopping-cart-fill ri-fw ri-2x":
			"ri-shopping-cart-line ri-fw ri-2x"

	return (
		<header>
			<h2><Link to='/'>Pic Some</Link></h2>
			<Link to='/cart'><i className={cartClassName}></i></Link>
		</header>
	);
}

export default Header;
