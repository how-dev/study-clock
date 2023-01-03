import React from "react";
import "./index.css"


const ClockButton = ({ children, action }) => {
    return (
        <button className="clockButton" onClick={action}>
            {children}
        </button>
    )
}

export default ClockButton