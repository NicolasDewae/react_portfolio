import React from "react";
import "./TwoDiv.css";

const TwoDiv = ({ dataLeft, typeLeft, dataRight, typeRight }) => {
    return (
        <>
            <div className="two-div">
                {/* if data = img */}
                {typeLeft === "img" && <img src={ dataLeft } alt="photo de l'article" />}
                {/* if data = text */}
                {typeLeft === "txt" && <p>{ dataLeft }</p>}
            </div>
            <div className="two-div">
                {/* if data = img */}
                {typeRight === "img" && <img src={ dataRight } alt="photo de l'article" />}
                {/* if data = text */}
                {typeRight === "txt" && <p>{ dataRight }</p>}
            </div>
        </>
    );
}

export default TwoDiv;