import React from "react";
import ClockButton from "../clockButton";

import "./index.css"


const SectionClocks = ({ clockMap }) => {
    const buttonsToSetClock = [
        {value: "05:00", action: clockMap.firstClock},
        {value: "10:00", action: clockMap.secondClock},
        {value: "15:00", action: clockMap.thirdClock},
    ]

    return (
        <div className="sectionClocksBlock">
            {buttonsToSetClock.map((button, index) => (
                <ClockButton key={index} action={button.action}>
                    {button.value}
                </ClockButton>
            ))}
        </div>
    )
}

export default SectionClocks
