import React, { useEffect, useState } from 'react';

const Context = React.createContext()

const photo_URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

function ContextProvider({children}) {
	const [ allPhotos, setPhotos ] = useState([]);

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

	console.log(allPhotos);
	return (
		<Context.Provider value={{allPhotos}}>
			{children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
