import './App.css';
import React from "react";
import Clock from './components/clock';
import SectionClocks from './components/sectionClocks';
import ActionClocks from './components/actionClocks';

const StudyClock = () => {
  const initialTimes = {
    firstClock: "05:00",
    secondClock: "10:00",
    thirdClock: "15:00"
  }

  const [time, setTime] = React.useState(initialTimes)
  const [currentClock, setCurrentClock] = React.useState("firstClock")
  const [isClicked, setIsClicked] = React.useState(false)

  const formatTime = time => {
    if (time < 10) {
      time = `0${time}`
    }
    return time
  }

  const updateCurrentTime = () => {
    let currentTime = time[currentClock]
    let data = new Date(`01/01/2000 00:${currentTime}`)
    data.setSeconds(data.getSeconds() - 1)
    let minutes = formatTime(data.getMinutes())
    let seconds = formatTime(data.getSeconds())

    let newTime = `${minutes}:${seconds}`
    let newTimeState = {...time}
    newTimeState[currentClock] = newTime
    
    setTime(newTimeState)
  }

  React.useEffect(() => {
    let currentTime = time[currentClock]
    let isRunning = currentTime !== "00:00"
    if (isClicked && isRunning) {
      let oneSecondInMillisseconds = 1000
      setTimeout(updateCurrentTime, oneSecondInMillisseconds)
    }
    if (!isRunning){
      setIsClicked(false)
    }
  }, [time, isClicked]) 

  const toggleClickClock = () => {
    setIsClicked(!isClicked)
  }

  const resetClock = () => {
    let newTimeState = {...time}
    newTimeState[currentClock] = initialTimes[currentClock]
    
    setTime(newTimeState)
  }



  return (
    <div className="App">
      <div className="clockBlock">
        <SectionClocks clockMap={{
          firstClock: () => setCurrentClock("firstClock"),
          secondClock: () => setCurrentClock("secondClock"),
          thirdClock: () => setCurrentClock("thirdClock")
        }}/>
        <Clock time={time[currentClock]} currentClock={currentClock}/>
        <ActionClocks 
          toggleClickClock={toggleClickClock} 
          resetClock={resetClock} 
          isClicked={isClicked}
        />
      </div>
      
    </div>
  );
}

export default StudyClock;
