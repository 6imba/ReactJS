import { useState } from "react";

const AutoClock = () => {
    let initialTime = new Date().toLocaleTimeString();
    const [newTime, setTime] = useState(initialTime)
    setInterval(()=>setTime(new Date().toLocaleTimeString()), 1000);
    return(
        <div>
            <p>AutoClock: {newTime}</p>
        </div>
    )
}

export default AutoClock;

// Here in this component state changes in every second. So this components gets rendered every second with new state_value.