import React, { useState, useCallback } from 'react';
import './Styles/App.css';

function App() {
    const [count, setCount] = useState(0);

    const handleCountBtn = useCallback(() => {
        setCount(count + 1)
    }, [count])

    const handleCountResetBtn = useCallback(() => {
        setCount(0)
    }, [])

    return (
        <div className="App">
            <div id='title'>Click Counter</div>
            <div id='count'>
                <b>Count:- </b>
                {count}
            </div>
            <div id='buttonsArea'>
                <button onClick={handleCountBtn}>Click</button>
                <button onClick={handleCountResetBtn}>Reset</button>
            </div>

            <div id="concept">
                <b>Concept:- </b>
                A simple click counter. which counts your button clicks, and a reset button which clears your count data.
            </div>
        </div>
    );
}

export default App;
