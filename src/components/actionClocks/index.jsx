import React from "react";
import ClockButton from "../clockButton";

import "./index.css"


const ActionClocks = ({isClicked, toggleClickClock, resetClock}) => {
    return (
        <div className="actionClockBlock">
            <ClockButton action={toggleClickClock}>
                {isClicked ? "Pausar" : "Iniciar"}
            </ClockButton>
            <ClockButton action={resetClock}>
                Resetar
            </ClockButton>
        </div>
        
    )
}

export default ActionClocks
