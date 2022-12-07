import React from "react";
import "./ThreeDiv.css";

const ThreeDiv = ({ dataLeft, typeLeft, dataCenter, typeCenter, dataRight, typeRight }) => {
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
                {typeCenter === "img" && <img src={ dataCenter } alt="photo de l'article" />}
                {/* if data = text */}
                {typeCenter === "txt" && <p>{ dataCenter }</p>}
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

export default ThreeDiv;