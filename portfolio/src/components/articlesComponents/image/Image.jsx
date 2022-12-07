import React from "react";
import "./Image.css";

const Image = ({ image }) => {
    return (
        <>
            <div className="one-div">
                <img src={ image } alt="photo de l'article" />
                {console.log("image = " + image)}
            </div>
        </>
    );
}

export default Image;