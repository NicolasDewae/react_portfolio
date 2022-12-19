import React from "react";
import "./OneDiv.css";

const OneDiv = ({ data }) => {

    return (
        <>
            <div className="one-div">
                <p>{ data }</p>
            </div>
        </>
    );
}

export default OneDiv;