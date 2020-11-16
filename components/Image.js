import React, { useContext, useEffect, useRef, useState } from 'react';

function Image({className, photo}) {
    const [ isHovered, setHovered ] = useState(false)
    const [ isFavorited, setFavorite ] = useState(false)
    
    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    const heartIcon = isHovered && <i className="ri-heart-line favorite"></i>;
    const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div 
            className={`${className} image-container`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            {heartIcon}
            {cartIcon}

			<img src={photo.url} className='image-grid'/>
		</div>
	);
}

export default Image;
