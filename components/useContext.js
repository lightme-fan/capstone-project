import React, { useEffect, useState } from 'react';

const Context = React.createContext()

const photo_URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

function ContextProvider({children}) {
	const [ allPhotos, setPhotos ] = useState([]);
	const [ cartItems, setCartItems ] = useState([])

	async function fetchPhotos() {
		const res = await fetch(photo_URL)
		const data = await res.json()
		setPhotos(data)
	}

	useEffect(() => {
		fetchPhotos()
	}, [])

	useEffect(() => {
		if(allPhotos) {
			console.log(allPhotos);	
		}
	}, [])

	function toggleFavorite(id) {
		const newPhotos = allPhotos.map(photo => {
			if (photo.id === id) {
				return {
					...photo,
					isFavorite: !photo.isFavorite
				}
			}
			return photo;
		})
		setPhotos(newPhotos)
	}

	// function addToCart(photo) {
	// 	setCartItems([
	// 		...cartItems,
	// 		photo			
	// 	])
	// 	console.log(cartItems);
	// }
	
	function addToCart(photo) {
		setCartItems(prevItem => [...prevItem, photo])
	}

	function removeFromCart(id) {
		setCartItems(prevItem => prevItem.filter(cartItem => cartItem.id !== id))
	}

	return (
		<Context.Provider value={{allPhotos, toggleFavorite, cartItems, addToCart, removeFromCart}}>
			{children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
