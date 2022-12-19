import React from "react";
import "./Title3.css";

const Title = ({ title }) => {
    return (
        <>
            <div className="title">
                <h3>{title}</h3>
            </div>
        </>
    );
}

export default Title;