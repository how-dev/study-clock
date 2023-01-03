import React from "react";
import "./index.css"

const Clock = ({time, currentClock}) => {

    return (
        <div className="clockBox">
            <div className={`blockBox--clock clock ${currentClock}`}>
                <div className={`clock--bell__left bell ${currentClock}`}>
                    <div className="bell--stick__left stick">

                    </div>
                </div>
                <div className="clock--hammer">

                </div>
                <div className={`clock--bell__right bell ${currentClock}`}>
                    <div className="bell--stick__right stick">

                    </div>
                </div>
                <p className="clock--content">
                    {time}
                </p>
            </div>
        </div>
    )
}

export default Clock;
