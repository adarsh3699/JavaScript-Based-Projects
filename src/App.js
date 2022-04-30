import React, { useState } from 'react';

function App() {
    const [speed, setSpeed] = useState("");
    const [distance, setDistance] = useState("");
    const [time, setTime] = useState("");
    const [speedPostion, setSpeedPostion] = useState(true);
    const [timePostion, setTimePostion] = useState(true);

    function handelSpeedChange(e) {
        const speedVal = e.target.value ;
        setSpeed(speedVal);

        if (time !== "" && speedPostion === true) {
            setDistance(speedVal*time)
        } else if (distance !== "") {
            setTime(distance/speedVal)
            setSpeedPostion(false)
        }
    }

    function handelDistanceChange(e) {
        const distVal = e.target.value ;
        setDistance(distVal);

        if (speed !== "") {
            setTime(distVal/speed)
        } else if (time !== "") {
            setSpeed(distVal/time)
        }
    }

    function handelTimeChange(e) {
        const timeVal = e.target.value ;
        setTime(timeVal)
        
        if (distance !== "" && timePostion === true) {
            setSpeed(distance/timeVal)
        } else if (speed !== "") {
            setDistance(speed*timeVal)
            setTimePostion(false)
        }
    }   

    function handelResetbtn() {
        setSpeed("");
        setDistance("")
        setTime("")
        setTimePostion(true)
        setSpeedPostion(true)
    }
    return (
        <div id='app'>
            <div id='title'>Speed Distance Time Calculator</div>

            <div>
                <div>Speed (meter/sec)</div>
                <input type="number" id="speed" value={speed} onChange={handelSpeedChange} />
            </div>
            <div>
                <div>Distance (meter)</div>
                <input type="number" id="distance"  value={distance} onChange={handelDistanceChange} />
            </div>
            <div>
                <div>Time (sec)</div>
                <input type="number" id="time" value={time} onChange={handelTimeChange} />
            </div>
            <button onClick={handelResetbtn}>Reset</button>
        </div>
    );
}

export default App;
