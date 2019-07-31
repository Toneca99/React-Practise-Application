import React from 'react';
import Image from './Image';
import './ImageList.css';

const ImageList = (props) => {
    const images = props.images.map(image => {
        return <Image key={image.id} image={image} />
    });

    return <div className="image-list">{images}</div>;
};



export default ImageList