import React from "react";
import "./Image.css";

const Image = ( data ) => {
    const image = data.picture.img;
    const alt = data.picture.alt;

    return (
        <>
            <div className="one-div">
                <img src={ image } alt={alt} />
            </div>
        </>
    );
}

export default Image;