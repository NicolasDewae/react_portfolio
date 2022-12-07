import React from "react";
import "./OneDiv.css";

const OneDiv = ({ data, type }) => {
    return (
        <>
            <div className="one-div">
                {/* if data = img */}
                {type === "img" && <img src={ data } alt="photo de l'article" />}
                {/* if data = text */}
                {type === "txt" && <p>{ data }</p>}
            </div>
        </>
    );
}

export default OneDiv;