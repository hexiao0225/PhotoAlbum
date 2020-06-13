import React from 'react';

const ThreeImagesInRowGallery = ({images}={})=>{
return(
    <div className="three-images-in-row-gallery">
        <ul>
            {images.map(url => <li>
                <img className="picture" alt="" src={url}></img>
            </li>)}
        </ul>
    </div>
)
}

export default ThreeImagesInRowGallery;